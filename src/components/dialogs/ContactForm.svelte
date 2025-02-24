<script lang="ts">
  import { _ } from "svelte-i18n";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { z } from "zod";
  import emailjs from "@emailjs/browser";

  import Button from "@/lib/buttons/Button.svelte";
  import FormField from "@/lib/forms/FormField.svelte";
  import Input from "@/lib/inputs/Input.svelte";
  import TextArea from "@/lib/inputs/TextArea.svelte";
  import { addToast } from "@/lib/toasts/toasts";
  import SendIcon from "@/lib/icons/SendIcon.svelte";
  import { closeDialog } from "@/lib/dialogs/Dialog.svelte";

  const key: string = import.meta.env.VITE_EMAIL_JS_API_KEY;
  const serviceId: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

  emailjs.init(key);

  let username = $state("");
  let email = $state("");
  let message = $state("");
  let isSubmitting = $state(false);

  const schema = z.object({
    username: z.string().nonempty($_("contact-error-required")),
    email: z
      .string()
      .nonempty($_("contact-error-required"))
      .email($_("contact-error-email")),
    message: z.string().nonempty($_("required")),
  });
  type Form = z.infer<typeof schema>;

  const { form, errors } = createForm<Form>({
    onSubmit: async (values) => {
      if (isSubmitting) return;
      isSubmitting = true;

      const templateParams = {
        from: values.username,
        email: values.email,
        message: values.message,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams);
        addToast($_("contact-on-success"), "success");
        closeDialog();
      } catch (error) {
        addToast($_("contact-on-error"), "error");
        console.error("Error while sending email", error);
      }

      isSubmitting = false;
    },
    extend: validator({ schema }),
  });
</script>

<form use:form>
  <FormField id="name" label={$_("contact-name")} errors={$errors.username}>
    <Input autoFocus type="text" id="username" bind:value={username} />
  </FormField>

  <FormField id="email" label={$_("contact-email")} errors={$errors.email}>
    <Input type="text" id="email" bind:value={email} />
  </FormField>

  <FormField
    id="message"
    label={$_("contact-message")}
    errors={$errors.message}
  >
    <TextArea rows={5} id="message" bind:value={message} />
  </FormField>

  <div class="submit">
    <Button _class="_send-button" type="submit" disabled={isSubmitting}>
      {$_("contact-send-button")}
      <SendIcon />
    </Button>
  </div>
</form>

<style style="scss">
  .submit {
    display: flex;
    justify-content: end;
  }
</style>
