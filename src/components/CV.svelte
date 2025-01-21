<script lang="ts">
  import { onMount } from "svelte";

  import Button from "@/lib/buttons/Button.svelte";
  import TextArea from "@/lib/inputs/TextArea.svelte";

  import { getAnswer } from "@/apis/groq";
  import Input from "@/lib/inputs/Input.svelte";

  type Message = {
    role: "user" | "AI";
    content: string;
  };

  let context = $state("");
  let question = $state("");
  let input = $derived(`${context}\n${question}`);

  let isAsking = $state(false);
  let answer = $state("");

  let messages: Message[] = $state([]);

  onMount(async () => {
    const response = await fetch("/CV-context.txt");
    context = await response.text();
  });

  async function sendMessage() {
    if (!context || !question || isAsking) return;
    messages.push({ role: "user", content: question });
    answer = "Hi!"; // await getAnswer(input);
    messages.push({ role: "AI", content: answer });
  }
</script>

<!-- <div class="answer-box">
  <p>{answer}</p>
</div>

<div class="question-box">
  <TextArea
    rows={1}
    placeholder="Are you experienced in Solidity?"
    bind:value={question}
  ></TextArea>
  <Button onclick={askQuestion} disabled={isAsking}>Ask</Button>
</div> -->
<!-- Comment -->

<div class="main-box">
  <div class="chat-box">
    {#each messages as message, i}
      <div class="chat-message {message.role === 'user' ? 'user' : 'AI'}">
        <div class="message-bubble">{message.content}</div>
      </div>
    {/each}
  </div>
  <div class="input-box">
    <Input
      id="question"
      type="text"
      placeholder="How old are you?"
      bind:value={question}
    />
    <Button onclick={sendMessage}>Send</Button>
  </div>
</div>

<!-- onkeydown={(e) => e.key === "Enter" && sendMessage()} -->

<style lang="scss">
  .main-box {
    display: flex;
    flex-direction: column;
    height: 500px;
    border: solid 1px var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .chat-box {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .chat-message {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 70%;
  }

  .chat-message.user {
    justify-content: flex-end;
  }

  .message-bubble {
    padding: 10px 15px;
    background: #e6e6e6;
    border-radius: 10px;
    line-height: 1.5;
    word-wrap: break-word;
    max-width: 100%;
  }

  .chat-message.user .message-bubble {
    background: #007bff;
    color: #fff;
  }

  .input-box {
    display: flex;
    justify-content: space-between;
    gap: var(--s8);
    padding: var(--s16);
    border-top: 1px solid var(--border-color);
  }
</style>
