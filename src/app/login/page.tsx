"use client";

import * as z from "zod";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import Link from "next/link";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email("Please enter a valid email address."),

  password: z
    .string({ required_error: "Password is required." })
    .describe("Password")
    .min(8, { message: "Password must be at least 8 characters." }),
});

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <AutoForm
          formSchema={loginSchema}
          fieldConfig={{
            password: {
              inputProps: {
                type: "password",
                placeholder: "••••••••",
              },
            },
          }}
          onSubmit={async (values) => {
            console.log("Login form submitted:", values);
            // TODO: Add actual login logic here
          }}
        >
          <AutoFormSubmit>Login</AutoFormSubmit>
        </AutoForm>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline dark:text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
