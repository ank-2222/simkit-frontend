import { IShippingAddress } from "@/Interface/cart";
("use client");

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
import { toast } from "@/components/ui/use-toast";



interface IShippingDisplayProps {
  shippingAddress: IShippingAddress[];
  handleAddressEdit: (shipping_address_id: string) => void;
  defaultAddress?: IShippingAddress;
}

function ShippingDisplay({
  shippingAddress,
  handleAddressEdit,
  defaultAddress
}: IShippingDisplayProps) {
  const FormSchema = z.object({
    address: z.string().min(1,{message:"Please select an address"}),
  });
  

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={defaultAddress?.shipping_address_id}
                  className="flex flex-col space-y-2"
                >
                  {shippingAddress &&
                    shippingAddress?.map((address, index) => (
                      <FormItem key={index} className="flex justify-start items-center gap-x-4">
                        <RadioGroupItem value={address.shipping_address_id} />
                        <FormLabel>
                          <div>
                            <p className="text-gray-800 text-base font-bold font-jakarta leading-[125%]">
                              {address.first_name} {address.last_name}, {address.phone}
                            </p>
                            <p className="text-cGreen text-[0.9rem] font-semibold font-jakarta capitalize leading-normal">
                              {address.address1}, {address.address2}
                            </p>
                            <p className="text-cGreen text-[0.9rem] font-semibold font-jakarta capitalize leading-normal">
                              {address.city}, {address.state}, {address.country}
                            </p>
                            <p className="text-cGreen text-[0.9rem] font-semibold font-jakarta capitalize leading-normal">
                              {address.postal_code}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              handleAddressEdit(address?.shipping_address_id)
                            }
                            className="text-cGreen text-base underline pt-1 font-semibold font-jakarta capitalize leading-normal"
                          >
                            Edit
                          </button>
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


  );
}

export default ShippingDisplay;
