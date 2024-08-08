"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import useContact from "@/Feature/contact/useContact";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Invalid phone number.",
  }),
  message: z.string().min(2, {
    message: "Write Something.",
  }),
  type: z.string(),
});

function Contactform() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "contact",
    },
  });
const {postContact}=useContact();
  function onSubmit(values: z.infer<typeof formSchema>) {
   
  postContact(values);
    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 lg:space-y-4 xl:space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel  className="w-[128.70px] text-black text-xl font-normal font-['Inter'] leading-7">Name</FormLabel>
                <FormControl>
                  <Input  className="border-0 border-b-2 border-black/20 text-cGreen font-semibold  text-[1.2rem] font-[poppins]  " {...field} />
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
                <FormLabel  className="w-[128.70px] text-black text-xl font-normal font-['Inter'] leading-7">E-mail Id</FormLabel>
                <FormControl>
                  <Input  className="border-0 border-b-2 border-black/20 text-cGreen font-semibold  text-[1.2rem] font-[poppins]  " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel  className="w-[128.70px] text-black text-xl font-normal font-['Inter'] leading-7">Phone</FormLabel>
                <FormControl>
                  <Input className="border-0 border-b-2 border-black/20 text-cGreen font-semibold  text-[1.2rem] font-[poppins]  " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel  className="w-[128.70px] text-black text-xl font-normal font-['Inter'] leading-7">Message</FormLabel>
                <FormControl>
                  <Input  className="border-0 border-b-2 border-black/20 text-cGreen font-semibold  text-[1.2rem] font-[poppins]   " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-black  text-white font-poppins rounded-[0.4rem] hover:bg-black/95  h-[50px] ">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default Contactform;
