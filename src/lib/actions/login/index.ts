'use server'

import * as z from "zod"

import { loginFormSchema } from "@/schemas/loginForm"

export const loginAction = async (data: z.infer<typeof loginFormSchema>) => {

    const validatedFileds = loginFormSchema.safeParse(data)

    if (!validatedFileds.success) {
        return {
            error : {
                state: true,
                message: "Invalid data"
            }
        }
    }

    return {
        success : {
            state: true,
            message: "Valid data"
        }
    }
}