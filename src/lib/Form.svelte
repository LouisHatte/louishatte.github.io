<script lang="ts">
  import emailjs from "@emailjs/browser";

  import Button from "@/lib/Button.svelte";

  const key: string = import.meta.env.VITE_EMAIL_JS_KEY;
  const serviceId: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

  emailjs.init(key);

  let from = $state("");
  let message = $state("");

  async function sendEmail(event: SubmitEvent) {
    event.preventDefault();

    const templateParams = { from, message };

    try {
      await emailjs.send(serviceId, templateId, templateParams);
    } catch (error) {
      console.error("Error sending email", error);
    }
  }
</script>

<form onsubmit={sendEmail}>
  <div>
    <label for="from">Name:</label>
    <input type="text" id="from" bind:value={from} required />
  </div>

  <div>
    <label for="message">Message:</label>
    <textarea id="message" bind:value={message} required></textarea>
  </div>

  <Button type="submit">Send Email</Button>
</form>

<style>
</style>
