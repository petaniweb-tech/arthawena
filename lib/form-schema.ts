import { z } from "zod"


const nameRegex = /^[a-zA-Z\s]+$/;
const messageRegex = /^[a-zA-Z0-9\s.,!?'-]*$/;
const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const ContactFormSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .min(1, { message: "Name is required" })
        .regex(nameRegex, { message: 'Name contains invalid characters' }),
    email: z
        .string({ required_error: "Email is required" })
        .min(1, { message: "Email is required" })
        .email({ message: "Email is not valid" }),
    phone: z
        .string({ required_error: "Phone number is required" })
        .min(1, { message: "Phone number is required" })
        .regex(phoneRegex, { message: 'Phone number is not valid' }),
    message: z
        .string({ required_error: "Message is required" })
        .min(1, { message: "Message is required" })
        .regex(messageRegex, { message: 'Message contains invalid characters' }),
});