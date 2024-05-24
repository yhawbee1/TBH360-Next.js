import React from 'react'

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FormInput() {
  return (

            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter you Username" {...field} />
                </FormControl>
                <FormControl>
                  <Input placeholder="Enter your Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
  )
}
