'use client'

import React from "react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "@/schemas/loginForm"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { CardWrapper } from "@/components/auth/CardWrapper"

export function LoginForm() {

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't you have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(()=> {})}>

                </form>
            </Form>
        </CardWrapper>
    )
}