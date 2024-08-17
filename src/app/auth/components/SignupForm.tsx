"use client";
import { z, } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { SignupUser } from "@/lib/appwrite/appwrite.auth";
import { useTransition } from "react";

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type SignupFormValues = z.infer<typeof schema>



const SignupForm = () => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<SignupFormValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(schema),
    });

    async function onSubmit(values: z.infer<typeof schema>) {


        console.clear();
        console.log(values);
        const { name, email, password } = values;
        try {
            // const response = await SignupUser(email, password, name);
            startTransition(async () => {
                const response = await SignupUser(email, password, name);
                console.log(response);
                alert("Account created successfully");
            })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    return (
        <div>
            <h1 className="text-2xl py-4 text-center md:text-left">
                <strong>Create your</strong> Account
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="gap-y-4 flex flex-col">


                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Confirm Password" {...field} />
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

                    
                    {/* <Separator className="mb-4" /> */}

                    <p className="text-center py-2 text-muted-foreground max-w-xl mx-auto">
                        By creating an account, you agree to the Terms of Service. We&apos;ll occasionally send you account-related emails.
                    </p>

                    <p className="text-center pt-2">
                        Already have an account? <Link href="/auth" className="text-foreground underline">Login</Link>
                    </p>
                </form>
            </Form>
        </div>
    )
}

export default SignupForm
