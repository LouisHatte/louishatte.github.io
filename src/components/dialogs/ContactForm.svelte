<script lang="ts">
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { z } from "zod";

  import { analytics, logEvent } from "@/apis/firebase";
  import { sendEmail, type TemplateParams } from "@/apis/emailJs";
  import { _ } from "@/classes/Locale";
  import Button from "@/lib/buttons/Button.svelte";
  import FormField from "@/lib/forms/FormField.svelte";
  import Input from "@/lib/inputs/Input.svelte";
  import TextArea from "@/lib/inputs/TextArea.svelte";
  import { addToast } from "@/lib/toasts/toasts";
  import SendIcon from "@/lib/icons/SendIcon.svelte";
  import { closeDialog } from "@/lib/dialogs/Dialog.svelte";

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
      logEvent(analytics, "send-email");
      isSubmitting = true;

      const templateParams: TemplateParams = {
        from: values.username,
        email: values.email,
        message: values.message,
      };

      try {
        await sendEmail(templateParams);
        addToast($_("contact-on-success"), "success");
        closeDialog();
      } catch (error) {
        addToast($_("on-error"), "error");
        console.error("Send email error", error);
        throw error;
      }

      isSubmitting = false;
    },
    extend: validator({ schema }),
  });
</script>

<form use:form>
  <FormField id="name" label={$_("contact-name")} errors={$errors.username}>
    <Input autoFocus id="username" bind:value={username} />
  </FormField>

  <FormField id="email" label={$_("contact-email")} errors={$errors.email}>
    <Input id="email" bind:value={email} />
  </FormField>

  <FormField
    id="message"
    label={$_("contact-message")}
    errors={$errors.message}
  >
    <TextArea rows={5} id="message" bind:value={message} />
  </FormField>

  <div class="submit">
    <Button type="submit" disabled={isSubmitting}>
      {$_("contact-send-button")}
      <SendIcon />
    </Button>
  </div>
</form>

<style lang="scss">
  .submit {
    display: flex;
    justify-content: end;
  }
</style>
