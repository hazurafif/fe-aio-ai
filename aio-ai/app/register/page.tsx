"use client";

import * as z from "zod";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";

const registerSchema = z
  .object({
    name: z
      .string({ required_error: "Full name is required." })
      .min(2, { message: "Name must be at least 2 characters." }),

    email: z
      .string({ required_error: "Email is required." })
      .email("Invalid email address."),

    password: z
      .string({ required_error: "Password is required." })
      .describe("Create a secure password")
      .min(8, { message: "Password must be at least 8 characters." }),

    confirmPassword: z
      .string({ required_error: "Please confirm your password." })
      .describe("Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>

        <AutoForm
          formSchema={registerSchema}
          fieldConfig={{
            password: {
              inputProps: {
                type: "password",
                placeholder: "",
              },
            },
            confirmPassword: {
              inputProps: {
                type: "password",
                placeholder: "",
              },
            },
          }}
          onSubmit={async (values) => {
            console.log("Register form submitted:", values);
            // TODO: Add actual registration logic here
          }}
        >
          <AutoFormSubmit>Create Account</AutoFormSubmit>
        </AutoForm>
      </div>
    </div>
  );
}
