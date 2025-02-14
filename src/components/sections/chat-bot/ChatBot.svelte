<script lang="ts">
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import Input from "@/lib/inputs/Input.svelte";
  import { addToast } from "@/lib/toasts/toasts";

  import { getAnswer } from "@/apis/groq";
  import { QuestionCounter } from "@/classes/QuestionCounter";

  type Message = {
    role: "user" | "bot";
    content: string;
  };

  const firstMessage = $_("chatFirstMessage");

  let context = $state("");
  let question = $state("");
  let input = $derived(`${context}\n${question}`);

  let isAsking = $state(false);
  let displayAnswer = $state("");

  let messages: Message[] = $state([
    {
      role: "bot",
      content: firstMessage,
    },
  ]);

  onMount(async () => {
    const response = await fetch("/CV-context.txt");
    context = await response.text();
  });

  $effect(() => {
    let i = 0;
    const lastAnswer = messages[messages.length - 1];
    const { role, content } = lastAnswer;
    if (role === "user") return;

    const intervalId = setInterval(() => {
      displayAnswer = content.slice(0, i);
      i++;

      if (i > content.length) {
        clearInterval(intervalId);
      }
    }, 25);
  });

  $effect(() => {
    console.log("A!");
    messages;
    const messagesBox = document.getElementById("messages-box-id")!;
    messagesBox.scrollTop = messagesBox.scrollHeight;
  });

  async function sendMessage() {
    if (!context || !question || isAsking) return;

    if (!QuestionCounter.isIncrementable()) {
      addToast($_("chatNoMoreCredits"), "info");
      return;
    }

    displayAnswer = "";
    isAsking = true;

    messages.push({ role: "user", content: question });
    const answer = "A!"; // const answer = await getAnswer(input);
    messages.push({ role: "bot", content: answer });

    question = "";
    // QuestionCounter.increment();
    isAsking = false;
  }
</script>

<div class="chat-box">
  <div id="messages-box-id" class="messages-box">
    {#each messages as message, i}
      <div class="message-box {message.role === 'user' ? 'user' : ''}">
        <div class="message-bubble">
          {#if i != messages.length - 1}
            {message.content}
          {:else}
            {displayAnswer}
          {/if}
        </div>
      </div>
    {/each}
  </div>
  <div class="input-box">
    <Input
      id="question"
      type="text"
      placeholder={$_("chatPlaceholder")}
      onkeydown={(e) => e.key === "Enter" && sendMessage()}
      bind:value={question}
    />
    <Button onclick={sendMessage} disabled={isAsking}>{$_("send")}</Button>
  </div>
</div>

<style lang="scss">
  .chat-box {
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: var(--s16);
    border: solid 1px var(--border-color);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    overflow: scroll;

    .messages-box {
      display: flex;
      flex-direction: column;
      gap: var(--s16);
      overflow-y: auto;

      .message-box {
        display: flex;

        &.user {
          justify-content: flex-end;
        }

        .message-bubble {
          max-width: 250px;
          padding: var(--s8);
          background: var(--color1);
          border-radius: var(--border-radius);
          color: var(--color10);
          line-height: 1.5;
          word-wrap: break-word;
        }
      }
    }

    .input-box {
      display: flex;
      justify-content: space-between;
      gap: var(--s8);
      padding: var(--s16);
      border: 1px solid var(--border-color);
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
</style>
