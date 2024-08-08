
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
  first_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  })
});

function PodcastForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    first_name:"",
    last_name:"",
    email:"",
    },
  });

   const {postContact}=useContact();
  function onSubmit(values: z.infer<typeof formSchema>) {
   
     const data = {
      name : values.first_name + " " + values.last_name,
      email : values.email,
      phone : "0",
      message : "new subscriber",
      type : "podcast"
     }
     postContact(data);
      form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 lg:space-y-4 xl:space-y-6">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel  className="w-full text-black text-xl font-normal font-jakarta leading-7">First Name</FormLabel>
                <FormControl>
                  <Input  className="border-0 border-b-2 border-black/20 text-cGreen font-semibold  text-[1.2rem] font-[poppins]  focus:bg-[#D1F3D4]/50  my-2  " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel  className="w-full text-black text-xl font-normal font-jakarta leading-7">Last Name</FormLabel>
                <FormControl>
                  <Input  className="border-0 border-b-2 border-black/20 text-cGreen font-semibold  text-[1.2rem] font-[poppins]  focus:bg-[#D1F3D4]/50  my-2  " {...field} />
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
                <FormLabel  className="w-full text-black text-xl font-normal font-jakarta leading-7">Email</FormLabel>
                <FormControl>
                  <Input className="border-0 border-b-2 border-black/20 text-cGreen font-semibold  text-[1.2rem] font-[poppins] focus:bg-[#D1F3D4]/50 my-2 " {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
         
          <Button type="submit" className="w-full bg-black  text-white font-poppins rounded-[0.4rem] hover:bg-black/95  h-[50px] ">Subscribe</Button>
        </form>
      </Form>
    </div>
  );
}

export default PodcastForm;
