"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { LoginUser } from "@/lib/appwrite/appwrite.auth";
import { useTransition } from "react";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    rememberMe: z.boolean(),
});

export type LoginFormValues = z.infer<typeof schema>;

const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        resolver: zodResolver(schema),
    });

    async function onSubmit(values: z.infer<typeof schema>) {
        console.clear();
        console.log(values);
        const { email, password } = values;
        try {
            const response = await LoginUser(email, password);
            // startTransition(async () => {
            //     const response = await LoginUser(email, password);
            //     console.log(response);
            //     alert("Logged in successfully");
            // })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    return (
        <div>
            <h1 className="text-2xl py-4 text-center md:text-left">
                <strong>Login to your</strong> Account
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="gap-y-4 flex flex-col">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="py-4">
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full block h-[50px]"
                        >
                            Submit
                        </Button>
                    </div>

                    <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-none border p-3 shadow-sm">
                                <div className="space-y-0.5">
                                    <FormLabel>Remember me?</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        aria-readonly
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <p className="text-center pt-2">
                        Don&apos;t have an account? <Link href="/auth/signup" className="text-foreground underline">Sign Up</Link>
                    </p>
                </form>
            </Form>
        </div>
    );
}

export default LoginForm;