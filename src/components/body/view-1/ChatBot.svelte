<script lang="ts">
  import { onMount, tick } from "svelte";

  import { analytics, logEvent } from "@/apis/firebase";
  import { getGroqAnswer } from "@/apis/groq";
  import { _ } from "@/classes/Locale";
  import {
    QUESTION_COUNTER_LIMIT,
    QuestionCounter,
  } from "@/classes/QuestionCounter.localStorage";
  import Button from "@/lib/buttons/Button.svelte";
  import Input from "@/lib/inputs/Input.svelte";
  import { addToast } from "@/lib/toasts/toasts";
  import SendIcon from "@/lib/icons/SendIcon.svelte";

  type Message = {
    role: "user" | "bot";
    content: string;
  };

  let messages: Message[] = $state([]);

  let context = $state("");
  let question = $state("");
  let questionsRemaining = $derived.by(getQuestionsRemainingText);
  let conversation: string[] = $state([]);
  let input = $derived(`${context}${conversation.join("\n")}\n`);

  $inspect(conversation);

  let isAsking = $state(false);
  let typingMessage = $state("");
  let isInputDisabled = $state(false);
  let hasAskedOneQuestion = $state(false);

  let divRef: HTMLDivElement;

  async function loadCVContext() {
    const response = await fetch("/CV-context.txt");
    context = await response.text();
  }

  onMount(() => {
    loadCVContext();

    if (messages.length === 0) {
      messages = [{ role: "bot", content: $_("chatbot-first-message") }];
    }

    divRef.addEventListener("wheel", stopScrollEventPropagation, {
      passive: true,
    });

    return () => {
      divRef.removeEventListener("wheel", stopScrollEventPropagation);
    };
  });

  // Handle the writing animation.
  $effect(() => {
    if (!messages.length) return;

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

  async function sendMessage() {
    if (!context || !question || isAsking) return;

    if (!QuestionCounter.isIncrementable()) {
      addToast($_("chatbot-no-more-credits"), "info");
      return;
    }

    logEvent(analytics, "send-question", { message: question });

    hasAskedOneQuestion = true;
    typingMessage = "";
    isAsking = true;
    isInputDisabled = true;

    conversation = [...conversation, question];
    messages = [...messages, { role: "user", content: question }];
    await tick();
    divRef.scrollTop = divRef.scrollHeight;

    let answer;
    try {
      answer = await getGroqAnswer(input);
    } catch (error) {
      isAsking = false;
      throw error;
    }

    conversation = [...conversation, answer];
    messages = [...messages, { role: "bot", content: answer }];
    await tick();
    divRef.scrollTop = divRef.scrollHeight;

    question = "";
    QuestionCounter.increment();
    isAsking = false;
  }

  function stopScrollEventPropagation(e: WheelEvent) {
    if (divRef.clientHeight !== divRef.scrollHeight) {
      e.stopPropagation();
    }
  }

  function getQuestionsRemainingText() {
    question;
    const n = QUESTION_COUNTER_LIMIT - QuestionCounter.get().count;
    const word1 = n <= 1 ? "question" : "questions";
    let word2 = $_(`chatbot-questions-remaining-${n <= 1 ? "1" : "2"}`);

    return `${n} ${word1} ${word2}`;
  }
</script>

<div class="chatbot">
  <div class="messages" bind:this={divRef}>
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
  <div class="input-box">
    <div class="input">
      <Input
        id="question"
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
    <div class="questions-remaining">
      {questionsRemaining}
    </div>
  </div>
</div>

<style lang="scss">
  .chatbot {
    height: 100%;
    min-width: 505px;
    max-height: 600px;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 var(--s16) var(--s16) var(--s16);
    border: solid 1px var(--color3);
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
          color: var(--color4);
          word-wrap: break-word;
        }
      }
    }

    .input-box {
      padding: 0 var(--s16);

      .input {
        display: flex;
        justify-content: space-between;
        gap: var(--s24);
        padding: var(--s16) 0;

        border-top: solid 1px var(--color3);
      }

      .questions-remaining {
        font-size: var(--s-font-size);
        color: var(--color3);
      }
    }
  }
</style>
