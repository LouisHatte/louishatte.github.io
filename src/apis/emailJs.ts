import emailjs from "@emailjs/browser";

const EMAIL_JS_KEY: string = import.meta.env.VITE_EMAIL_JS_API_KEY;
const EMAIL_JS_SERVICE_ID: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

emailjs.init(EMAIL_JS_KEY);

export type TemplateParams = {
  from: string;
  email: string;
  message: string;
};

export async function sendEmail(templateParams: TemplateParams) {
  await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams);
}
