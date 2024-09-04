
"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContacFormSchema } from './../lib/form-schema';
import ContactFormEmail from "@/contact-form-email";

type ContactFormInputs = z.infer<typeof ContacFormSchema>;

export async function addEntry(data: ContactFormInputs) {
  const result = ContacFormSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContacFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, phone, message } = result.data;
    try {
      const emailData = await resend.emails.send({
        from: "noreply@petaniweb.com",
        to: ["tech@petaniweb.com"],
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