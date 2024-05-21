"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react"; 
import { useRouter } from "next/navigation";


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters."
  })
});

export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

 

  const [isLoading , setIsLoading] = useState(false)

  const router = useRouter()

  function onSubmit(values) {
    setIsLoading(true)
    console.log(values);
    // setIsLoading(false)
    router.push('/admin');
  }

  const PasswordToggle = ({ field }) => {
    const [viewPassword, setViewPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setViewPassword((prevState) => !prevState);
    };

    return (
      <div className="flex justify-between items-center bg-white dark:bg-transparent rounded-md dark:border-white dark:border">
        <Input
          {...field}
          type={viewPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="border border-0 active:border-0 rounded-e-none bg-transparent dark:text-gray dark:bg-transparent  "
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
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 md:space-y-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your username"
                  className="dark:text-gray-100 dark:bg-transparent"
                />
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
                <PasswordToggle field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-4 dark:bg-tbhblue dark:text-white text-lg  hover:bg-tbhgreen cursor-pointer " disabled={isLoading} >
         {isLoading ? "Loading..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
