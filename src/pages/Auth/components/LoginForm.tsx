/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Medusa from "@medusajs/medusa-js";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
const medusa = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  maxRetries: 3,
});

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
function LoginForm({ handleForgotPassword, handleSignupForm }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const aheadLogin = params.get("ahead");
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      medusa.auth
        .getToken(values)
        .then(({ access_token }) => {
          localStorage.setItem("token", access_token);
          form.reset();
          toast({
            title: "Login Successful",
            description: "You have successfully logged in",
            variant: "success",
          });
          setIsLoading(false);

          if (aheadLogin) {
            navigate("/"+aheadLogin);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            medusa.auth.exists(values.email).then((response) => {
              if (response.exists) {
                toast({
                  title: "Login Failed",
                  description: "Invalid email or password",
                  variant: "error",
                });
              } else {
                toast({
                  title: "Sign Up Required",
                  description: "Account with this email does not exist. Please sign up.",
                  variant: "success",
                });
                handleSignupForm();
              }
              setIsLoading(false);
            });
          }
        });
    } catch (error) {
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
          className="space-y-4 lg:space-y-2 "
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
          <div className="flex justify-end items-center py-2 cursor-pointer ">
            <a
              onClick={handleForgotPassword}
              className="text-black text-sm font-normal font-jakarta leading-1 text-right w-full "
            >
              Forgot Password?
            </a>
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full bg-black  text-white font-poppins rounded-[0.4rem] hover:bg-black/95  h-[50px] "
          >
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
