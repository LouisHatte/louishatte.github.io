<script lang="ts">
  import emailjs from "@emailjs/browser";

  import Button from "@/lib/Button.svelte";

  const key: string = import.meta.env.VITE_EMAIL_JS_KEY;
  const serviceId: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

  emailjs.init(key);

  let name = $state("");
  let email = $state("");
  let message = $state("");

  async function sendEmail(event: SubmitEvent) {
    event.preventDefault();

    const templateParams = { from: name, email, message };

    try {
      await emailjs.send(serviceId, templateId, templateParams);
    } catch (error) {
      console.error("Error sending email", error);
    }
  }
</script>

<form onsubmit={sendEmail}>
  <div class="form-section">
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={name} required />
  </div>

  <div class="form-section">
    <label for="email">Email</label>
    <input type="text" id="email" bind:value={email} required />
  </div>

  <div class="form-section">
    <label for="message">Message</label>
    <textarea rows="5" id="message" bind:value={message} required></textarea>
  </div>

  <div class="button-submit">
    <Button type="submit">Send Email</Button>
  </div>
</form>

<style>
  label {
    color: #b6b6b6;
    margin-bottom: 8px;
  }

  textarea {
    width: 100%;
    resize: none;
    margin-bottom: 24px;
  }

  input,
  textarea {
    width: 100%;
    color: white;
    background-color: transparent;
    padding: 5px;
    border: solid 2px #1f1e1e;
    border-radius: 6px;
  }

  input:focus {
    border: solid 1px red;
  }

  .button-submit {
    display: flex;
    justify-content: end;
  }

  .form-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
</style>
