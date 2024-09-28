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


const passwordSchema = z.string().refine(
  (value) => {
    // Check for minimum length of 8 characters
    if (value.length < 8) {
      return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(value)) {
      return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(value)) {
      return false;
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return false;
    }

    return true;
  },
  {
    message:
      "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one special character.",
  }
);

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: passwordSchema,
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PasswordResetRequestForm({handleBackLogin}:any) {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }

  



  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 lg:space-y-6 "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black xl:text-xl font-normal font-jakarta leading-1 lg:text-lg ">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 border-b-2 border-black/20 text-black/80 font-semibold  text-[1.2rem] font-jakarta xl:h-[30px] lg:h-[25px] h-[30px] "
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
           <div className="flex justify-end items-center  cursor-pointer ">
                <a onClick={handleBackLogin} className="text-black text-sm font-normal font-jakarta leading-1 text-right w-full ">Login?</a>
            </div>
          <Button
            disabled={true}

            type="submit"
            className="w-full bg-black  text-white font-poppins rounded-[0.4rem] hover:bg-black/95  h-[50px]  "
          >
            Request Reset Link
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default PasswordResetRequestForm;
