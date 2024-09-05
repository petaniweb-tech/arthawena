
"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema } from './../lib/form-schema';
import ContactFormEmail from "@/contact-form-email";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);
const emailFrom = process.env.EMAIL_FROM!!;
const emailTo = [process.env.PETANIWEB_EMAIL!!];

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, phone, message } = result.data;
    try {
      const emailData = await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\Message: ${message}\n`,
        react: ContactFormEmail({
          name,
          email,
          phone,
          message,
        }),
      });
      return { success: true, data: emailData };
    } catch (error) {
      console.error("sendemailerror", error);
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}