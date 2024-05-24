// File path: src/components/SignUpForm.js

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useState, useRef, useEffect, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";

// Schema validation using zod
const formSchema = z
  .object({
    fullname: z.string().min(2, {
      message: "Full name must be at least 2 characters."
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters."
    }),
    email: z.string().email({
      message: "Must be a valid email address."
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters."
    }),
    confirmPassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters."
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
  });

const PasswordToggle = forwardRef(({ field }, ref) => {
  const [viewPassword, setViewPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setViewPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [viewPassword, ref]);

  return (
    <div className="flex justify-between items-center bg-white dark:bg-transparent rounded-md dark:border-white dark:border">
      <Input
        {...field}
        ref={ref}
        type={viewPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="border active:border-0 rounded-e-none dark:text-gray dark:bg-transparent"
      />
      {viewPassword ? (
        <EyeOffIcon
          onClick={togglePasswordVisibility}
          className="h-10 rounded-e-md w-8 cursor-pointer mx-2 text-lg dark:text-gray-500"
        />
      ) : (
        <EyeIcon
          onClick={togglePasswordVisibility}
          className="h-10 rounded-e-md w-8 cursor-pointer mx-2 text-lg dark:text-gray-500"
        />
      )}
    </div>
  );
});
PasswordToggle.displayName = "PasswordToggle";

export default function SignUpForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  function onSubmit(values) {
    setIsLoading(true);
    console.log(values);
    // Handle sign up logic here
    router.push("/welcome");
  }

  return (
    <Form {...control}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <div className="md:col-span-2">
          <FormField
            control={control}
            name="fullname"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="dark:text-white">Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your full name"
                    className="border-1 dark:border-white active:border-0 bg-white dark:text-gray dark:bg-transparent"
                  />
                </FormControl>
                <FormMessage className="dark:text-red-200">
                  {fieldState.error?.message}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="username"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="dark:text-white">Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your username"
                  className="border-1 dark:border-white active:border-0 bg-white dark:text-gray dark:bg-transparent"
                />
              </FormControl>
              <FormMessage className="dark:text-red-200">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="dark:text-white">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className="border-1 dark:border-white active:border-0 bg-white dark:text-gray dark:bg-transparent"
                />
              </FormControl>
              <FormMessage className="dark:text-red-200">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="dark:text-white">Password</FormLabel>
              <FormControl>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => <PasswordToggle field={field} />}
                />
              </FormControl>
              <FormMessage className="dark:text-red-200">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="dark:text-white">
                Confirm Password
              </FormLabel>
              <FormControl>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => <PasswordToggle field={field} />}
                />
              </FormControl>
              <FormMessage className="dark:text-red-200">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className="md:col-span-2">
          <Button
            type="submit"
            className="w-full mt-4 dark:bg-tbhblue dark:text-white text-lg hover:bg-tbhgreen cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
