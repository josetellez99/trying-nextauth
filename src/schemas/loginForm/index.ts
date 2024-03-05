import * as z from "zod"

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})