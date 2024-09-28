/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useCreateCustomer } from "medusa-react";

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
  first_name: z.string().min(2, {
    message: "Fill in your first name.",
  }),
  last_name: z.string().min(2, {
    message: "Fill in your last name.",
  }),
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SignupForm({ handleBackLogin }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const createCustomer = useCreateCustomer();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      createCustomer.mutate(values, {
        onSuccess: () => {
          toast({
            variant: "success",
            title: "Success",
            description: "Account created successfully",
          });
          form.reset();
          handleBackLogin();
        },
        onError: (error: any) => {
          toast({
            variant: "error",
            title: "Error",
            description: error?.response?.data.message,
          });
        },
      });
        setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);

      console.error(error);
    }
  }

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 lg:space-y-1 "
        >
          <div className="flex justify-center items-center gap-x-4 ">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-black xl:text-xl font-normal font-jakarta leading-1 lg:text-lg">
                    First Name
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
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black xl:text-xl font-normal font-jakarta leading-1 lg:text-lg ">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-0 border-b-2 border-black/20 text-black/80 font-semibold  text-[1.2rem] font-jakarta xl:h-[30px] lg:h-[25px] h-[30px]  "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
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
                    className="border-0 border-b-2 border-black/20 text-black/80 font-semibold  text-[1.2rem] font-jakarta xl:h-[30px] lg:h-[25px] h-[30px]  "
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black xl:text-xl font-normal font-jakarta leading-1 lg:text-lg">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative ">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="border-0 border-b-2 border-black/20 text-black/80 font-semibold  text-[1.2rem] font-jakarta xl:h-[30px] lg:h-[25px] h-[30px] "
                      {...field}
                    />
                    <a
                      className="absolute top-0 right-0  "
                      onClick={handlePasswordShow}
                    >
                      {showPassword ? <Eye size={24} /> : <EyeOff size={24} />}
                    </a>
                  </div>
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div>
            <Button
            disabled={true}

              // disabled={isLoading}
              type="submit"
              className="w-full bg-black mt-4  text-white font-poppins rounded-[0.4rem] hover:bg-black/95  h-[50px] "
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default SignupForm;
