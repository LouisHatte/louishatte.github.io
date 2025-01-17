<script lang="ts">
  import { getContext } from "svelte";
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

  import { isMobile } from "@/stores/screenSize";

  const key: string = import.meta.env.VITE_EMAIL_JS_API_KEY;
  const serviceId: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

  emailjs.init(key);

  let username = $state("");
  let email = $state("");
  let message = $state("");
  let isSubmitting = $state(false);

  const schema = z.object({
    username: z.string().nonempty($_("required")),
    email: z.string().nonempty($_("required")).email($_("invalidEmail")),
    message: z.string().nonempty($_("required")),
  });
  type Form = z.infer<typeof schema>;

  const closeModal: () => void = getContext("closeModal");

  const { form, errors } = createForm<Form>({
    onSubmit: async (values) => {
      if (isSubmitting) return;
      isSubmitting = true;

      const templateParams = {
        from: values.username,
        email: values.email,
        message: values.message,
      };

      console.log(templateParams);

      try {
        await emailjs.send(serviceId, templateId, templateParams);
        addToast($_("contactSuccess"), "success");
        closeModal();
      } catch (error) {
        addToast($_("contactError"), "error");
        console.error("Error while sending email", error);
      }

      isSubmitting = false;
    },
    extend: validator({ schema }),
  });
</script>

<form use:form>
  <FormField id="name" label={$_("contactName")} errors={$errors.username}>
    <Input autoFocus type="text" id="username" bind:value={username} />
  </FormField>

  <FormField id="email" label={$_("contactEmail")} errors={$errors.email}>
    <Input type="text" id="email" bind:value={email} />
  </FormField>

  <FormField id="message" label={$_("contactMessage")} errors={$errors.message}>
    <TextArea rows={5} id="message" bind:value={message} />
  </FormField>

  <div class={$isMobile ? "submit_M" : "submit"}>
    <Button
      _class={$isMobile ? "_send-button_M" : "_send-button"}
      type="submit"
      disabled={isSubmitting}
    >
      {$_("send")}
    </Button>
  </div>
</form>

<style style="scss">
  .submit {
    display: flex;
    justify-content: end;
  }

  .submit_M {
    display: flex;
    justify-content: center;
  }
</style>
