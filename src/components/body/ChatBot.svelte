<script lang="ts">
  import { onMount, tick } from "svelte";
  import { _ } from "svelte-i18n";

  import { getAnswer } from "@/apis/groq";
  import { QuestionCounter } from "@/classes/QuestionCounter";
  import Button from "@/lib/buttons/Button.svelte";
  import Input from "@/lib/inputs/Input.svelte";
  import { addToast } from "@/lib/toasts/toasts";
  import SendIcon from "@/lib/icons/SendIcon.svelte";

  type Message = {
    role: "user" | "bot";
    content: string;
  };

  const firstMessage = $_("chatbot-first-message");

  let context = $state("");
  let question = $state("");
  let input = $derived(`${context}\n${question}`);

  let isAsking = $state(false);
  let typingMessage = $state("");
  let isInputDisabled = $state(false);

  let messages: Message[] = $state([
    {
      role: "bot",
      content: firstMessage,
    },
  ]);
  let messagesRef: HTMLDivElement;

  // load the CV context
  onMount(async () => {
    const response = await fetch("/CV-context.txt");
    context = await response.text();
  });

  // handle the writing animation
  $effect(() => {
    let i = 0;
    const lastMessage = messages[messages.length - 1];
    const { role, content } = lastMessage;

    if (role === "user") {
      typingMessage = content;
      isInputDisabled = false;
      return;
    }

    const intervalId = setInterval(() => {
      typingMessage = content.slice(0, i);
      i++;

      if (i > content.length) {
        isInputDisabled = false;
        clearInterval(intervalId);
      }
    }, 10);
  });

  $inspect(messages);

  // $effect(() => {
  //   console.log("EFFECT!");
  //   messages;
  //   const messagesBox = document.getElementById("messages-box-id")!;
  //   messagesBox.scrollTop = -messagesBox.scrollHeight;
  // });

  async function sendMessage() {
    if (!context || !question || isAsking) return;

    if (!QuestionCounter.isIncrementable()) {
      addToast($_("chatbot-no-more-credits"), "info");
      return;
    }

    typingMessage = "";
    isAsking = true;
    isInputDisabled = true;

    messages.push({ role: "user", content: question });
    await tick();
    messagesRef.scrollTop = messagesRef.scrollHeight;

    const answer = await getAnswer(input);
    messages.push({ role: "bot", content: answer });
    await tick();
    messagesRef.scrollTop = messagesRef.scrollHeight;

    question = "";
    // QuestionCounter.increment();
    isAsking = false;
  }
</script>

<div class="chatbot">
  <div class="messages" bind:this={messagesRef}>
    {#each messages as message, index}
      <div class="message {message.role === 'user' ? 'user' : ''}">
        <div class="bubble">
          {#if index !== messages.length - 1}
            {message.content}
          {:else}
            {typingMessage}
          {/if}
        </div>
      </div>
    {/each}
  </div>
  <div class="input">
    <Input
      id="question"
      type="text"
      placeholder={$_("chatbot-input-example")}
      disabled={isInputDisabled}
      onkeydown={(e) => e.key === "Enter" && sendMessage()}
      bind:value={question}
    />
    <Button onclick={sendMessage} disabled={isAsking}>
      {$_("chatbot-send-button")}
      <SendIcon />
    </Button>
  </div>
</div>

<style lang="scss">
  .chatbot {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 var(--s16) var(--s16) var(--s16);
    border: solid 1px var(--color5);
    border-radius: var(--border-radius);
    overflow: scroll;

    .messages {
      display: flex;
      flex-direction: column;
      gap: var(--s16);
      overflow-y: auto;
      margin-top: var(--s16);
      padding-bottom: var(--s32);

      .message {
        display: flex;

        &.user {
          justify-content: flex-end;
        }

        .bubble {
          max-width: 75%;
          padding: var(--s8);
          background: var(--color1);
          border-radius: var(--border-radius);
          color: var(--color9);
          line-height: 1.5;
          word-wrap: break-word;
        }
      }
    }

    .input {
      display: flex;
      justify-content: space-between;
      gap: var(--s8);
      padding: var(--s16);
      margin-top: var(--s16);
      border-top: solid 1px var(--color5);
    }
  }
</style>
