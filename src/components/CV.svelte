<script lang="ts">
  import { onMount } from "svelte";
  import { HfInference } from "@huggingface/inference";
  import axios from "axios";

  import Button from "@/lib/buttons/Button.svelte";
  import TextArea from "@/lib/inputs/TextArea.svelte";

  const groqUrl = "https://api.groq.com/openai/v1/chat/completions";
  const groqKey: string = import.meta.env.VITE_GROQ_API_KEY;
  // const hf = new HfInference(key);

  let isFirstQuestion = true;

  let context = $state("");
  let question = $state("");
  let input = $derived(`${context}${isFirstQuestion}${question}\n\n`);

  let answer = $state("");

  onMount(async () => {
    const response = await fetch("/gpt2-context.txt");
    context = await response.text();
  });

  async function askQuestion() {
    if (!context || !question) return;
    try {
      const response = await axios.post(
        groqUrl,
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: input,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqKey}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error fetching completion:", error);
    }
  }

  // const result = await hf.textGeneration({
  //   model: "gpt2",
  //   inputs: input,
  // });
  // console.log("RESULT", result.generated_text);
  // }
</script>

<div>
  <TextArea rows={4} placeholder="How old are you?..." bind:value={question}
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
