import { z } from "zod"

export const ContacFormSchema = z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Email is not valid" }),
    phone: z.string({required_error: "Phone is required"}),
    message: z.string({required_error: "Message is required"}),
});