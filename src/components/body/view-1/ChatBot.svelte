<script lang="ts">
  import { onMount, tick } from "svelte";
  import { _ } from "svelte-i18n";

  import { getAnswer } from "@/apis/groq";
  import { QuestionCounter } from "@/classes/QuestionCounter";
  import Button from "@/lib/buttons/Button.svelte";
  import Input from "@/lib/inputs/Input.svelte";
  import { addToast } from "@/lib/toasts/toasts";
  import SendIcon from "@/lib/icons/SendIcon.svelte";
  import { addMessage, messages } from "@/stores/chatMessages";

  let context = $state("");
  let question = $state("");
  let input = $derived(`${context}\n${question}`);

  let isAsking = $state(false);
  let typingMessage = $state("");
  let isInputDisabled = $state(false);
  let hasAskedOneQuestion = $state(false);

  let divRef: HTMLDivElement;

  onMount(async () => {
    const response = await fetch("/CV-context.txt");
    context = await response.text();
    if ($messages.length === 0) {
      addMessage({ role: "bot", content: $_("chatbot-first-message") });
    }
  });

  // handle the writing animation
  $effect(() => {
    if (!$messages.length) return;

    let i = 0;
    const lastMessage = $messages[$messages.length - 1];
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

  async function sendMessage() {
    if (!context || !question || isAsking) return;

    if (!QuestionCounter.isIncrementable()) {
      addToast($_("chatbot-no-more-credits"), "info");
      return;
    }

    hasAskedOneQuestion = true;
    typingMessage = "";
    isAsking = true;
    isInputDisabled = true;

    addMessage({ role: "user", content: question });
    await tick();
    divRef.scrollTop = divRef.scrollHeight;

    // const answer = $_("lorem");
    const answer = await getAnswer(input);
    addMessage({ role: "bot", content: answer });
    await tick();
    divRef.scrollTop = divRef.scrollHeight;

    question = "";
    // QuestionCounter.increment();
    isAsking = false;
  }

  function stopScrollEventPropagation(e: WheelEvent) {
    if (divRef.clientHeight !== divRef.scrollHeight) {
      e.stopPropagation();
    }
  }
</script>

<div class="chatbot" onwheel={stopScrollEventPropagation}>
  <div class="messages" bind:this={divRef}>
    {#each $messages as message, index}
      <div class="message {message.role === 'user' ? 'user' : ''}">
        <div class="bubble">
          {#if index !== $messages.length - 1}
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
    height: 100%;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 var(--s16) var(--s16) var(--s16);
    border: solid 1px var(--color5);
    border-radius: var(--border-radius);
    overflow: scroll;

    .messages {
      height: 100%;
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
