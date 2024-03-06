'use client'

import React from "react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "@/schemas/loginForm"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { loginAction } from "@/lib/actions/login"
import { CardWrapper } from "@/components/auth/CardWrapper"

export function LoginForm() {

    const [error, setError] = React.useState<string | undefined>('')
    const [success, setSuccess] = React.useState<string | undefined>('')

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const handleSumit = async (data: z.infer<typeof loginFormSchema>) => {
        const res = await loginAction(data)
        setSuccess(res.success?.message)
        setError(res.error?.message)
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't you have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(handleSumit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={ ({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={ ({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="********"
                                            required
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                    </div>
                    <Button 
                        type="submit"
                        className="w-full"
                    >Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}