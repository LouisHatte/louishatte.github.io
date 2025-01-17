<script lang="ts">
  import { onMount } from "svelte";
  import { HfInference } from "@huggingface/inference";

  import Button from "@/lib/buttons/Button.svelte";
  import TextArea from "@/lib/inputs/TextArea.svelte";

  const key: string = import.meta.env.VITE_HUGGING_FACE_API_KEY;
  const hf = new HfInference(key);

  let context = $state("");
  let question = $state("");
  let input = $derived(`${context}${question}\n\n`);

  let answer = $state("");

  onMount(async () => {
    const response = await fetch("/gpt2-context.txt");
    context = await response.text();
  });

  async function askQuestion() {
    if (!context || !question) return;

    console.log(input);
    const result = await hf.textGeneration({
      model: "distilgpt2",
      inputs: input,
      parameters: {
        max_new_tokens: 20, // Limit the response length
        repetition_penalty: 1.2, // Penalize repeated tokens
        temperature: 0.7, // Control randomness
        top_k: 50, // Limit token sampling to the top 50
        top_p: 0.9,
      },
    });
    console.log("RESULT", result.generated_text);
  }
</script>

<div>
  <TextArea rows={4} placeholder="How old is Louis?..." bind:value={question}
  ></TextArea>
  <Button onclick={askQuestion}>Ask</Button>
</div>

<div class="answer-box">
  <p>{answer}</p>
</div>

<style>
  .answer-box {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f9f9f9;
  }

  .answer-box p {
    margin: 0;
  }
</style>
