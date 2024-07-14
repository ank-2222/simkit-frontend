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
import { IShippingForm } from "@/Interface/cart";
import { countries } from "@/Data/CountryCode";
import { useEffect } from "react";

// import Medusa from "@medusajs/medusa-js";
// import { useNavigate } from "react-router-dom";
// import { useToast } from "@/components/ui/use-toast";
// const medusa = new Medusa({
//   baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
//   maxRetries: 3,
// });

interface BillingFormProps {
  handleAddShipping: (data: IShippingForm) => void;
  editAddress?: IShippingForm;
  setIsAddressEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  first_name: z.string().min(3, { message: "First name is required." }),
  last_name: z.string().min(3, { message: "Last name is required." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  company: z.string(),
  address1: z.string().min(3, { message: "Address is required." }),
  address2: z.string(),
  city: z.string().min(3, { message: "City is required." }),
  postal_code: z.string().min(3, { message: "Postal code is required." }),
  country: z.string().min(2, { message: "Country is required." }),
  state: z.string().min(3, { message: "State is required." }),
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ShippingForm({
  handleAddShipping,
  editAddress,
  setIsAddressEditing,
}: BillingFormProps) {
  //   const navigate = useNavigate();
  //   const params = new URLSearchParams(window.location.search);
  //   const aheadLogin = params.get("ahead");
  //   const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      postal_code: "",
      country: "",
      state: "",
    },
  });

  useEffect(() => {
    if (editAddress) {
      form.reset(editAddress);
    }
  }, [editAddress, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    handleAddShipping(values);

    if (setIsAddressEditing) {
      setIsAddressEditing(false);
    }
    form.reset();
  }

  return (
    <div className="w-full mt-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 lg:space-y-6 "
        >
          <div className="flex justify-center items-center flex-col lg:flex-row gap-x-8 gap-y-2 lg:gap-y-0">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-lg font-medium font-jakarta leading-[100%]">
                    First name*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      required
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md placeholder:text-gray-600  "
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
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    Last name*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      required
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md placeholder:text-gray-600  "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center items-center flex-col lg:flex-row gap-x-8 gap-y-2 lg:gap-y-0">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    Email*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      required
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md placeholder:text-gray-600 "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    Phone Number*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      required
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md placeholder:text-gray-600  "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    Company (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company"
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md placeholder:text-gray-600  "
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
            name="address1"
            render={({ field }) => (
              <FormItem className="flex-1 w-full">
                <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                  Street Address*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Street Address"
                    required
                    className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md  placeholder:text-gray-600 "
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address2"
            render={({ field }) => (
              <FormItem className="flex-1 w-full">
                <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]"></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Apartment, suite, etc. (optional)"
                    className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md  placeholder:text-gray-600 "
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center flex-col lg:flex-row gap-x-8 gap-y-2 lg:gap-y-0">
            <FormField
              control={form.control}
              name="postal_code"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    Zip Code*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Zip Code"
                      required
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md  placeholder:text-gray-600 "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    Town/City*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Town/City"
                      required
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md  placeholder:text-gray-600 "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center items-center flex-col lg:flex-row gap-x-8 gap-y-2 lg:gap-y-0">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="flex-1 w-full ">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    State/Province*
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="State/Province"
                      required
                      className=" border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md  placeholder:text-gray-600  "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormLabel className="text-zinc-800 text-md font-medium font-jakarta leading-[100%]">
                    Country/Region*
                  </FormLabel>
                  <FormControl>
                    <select
                      required
                      className="border-[1px] border-black/50  rounded-[0.2rem] text-cGreen font-semibold text-md  placeholder:text-gray-600 focus:outline-none w-full h-[40px] "
                      {...field}
                    >
                      {countries?.map((country) => (
                        <option
                          key={country?.code.toLowerCase()}
                          value={country.code.toLowerCase()}
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-black  text-white font-poppins rounded-[0.4rem] hover:bg-black/95  h-[40px]  "
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ShippingForm;
