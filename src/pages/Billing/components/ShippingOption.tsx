import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PricedShippingOption } from "@medusajs/medusa/dist/types/pricing";

import Payment from "./Payment";
import { PaymentSession } from "@medusajs/medusa";

type IShippingOptionProps = {
  shippingOptions?: PricedShippingOption[];
  paymentSession:PaymentSession[];
  handleAddShippingMethod: (option_id: string) => void;
  defaultShippingOption?: string;
};

function ShippingOption({ shippingOptions ,paymentSession,handleAddShippingMethod,defaultShippingOption}: IShippingOptionProps) {
  // const urlParams = new URLSearchParams(window.location.search);
  // const cartId = urlParams.get("cart_id") || localStorage.getItem("cart_id");
  const FormSchema = z.object({
    shipping_option: z.string().min(1, { message: "Please select an option" }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  

  return (
    <div>
      <section>
        <Form {...form}>
          <h1 className="text-gray-800 text-[1.5rem] mt-4 mb-4 font-bold font-jakarta leading-[110%]  ">
            Shipping option
          </h1>
          <form className="w-full space-y-6">
            <FormField
              control={form.control}
              name="shipping_option"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                     defaultValue={defaultShippingOption}
                      onValueChange={(value) => {
                        field.onChange(value); // This updates the form state
                        handleAddShippingMethod(value); // This calls your function
                      }}
                      className="flex flex-col space-y-2"
                    >
                      {shippingOptions &&
                        shippingOptions?.map((shipping, index) => (
                          <FormItem
                            key={index}
                            className="flex flex-row justify-start items-center gap-x-4 border-2 h-[50px] px-4  "
                          >
                            <RadioGroupItem value={shipping?.id ?? ""}  />
                            <FormLabel>
                              
                                <p className="text-gray-800 text-base font-bold font-jakarta   ">
                                  {shipping.name}
                                </p>
                             
                            </FormLabel>
                          </FormItem>
                        ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </section>

      <section>
        {paymentSession.length > 0 && (
          <Payment paymentSession={paymentSession} />
        )}
      </section>
    </div>
  );
}

export default ShippingOption;
