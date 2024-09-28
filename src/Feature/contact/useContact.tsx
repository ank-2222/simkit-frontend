/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import { postContactService } from "@/service/contact";
import { useMutation } from "@tanstack/react-query";

interface IContact {
    name?: string;
    email?: string;
    message?: string;
    phone?: string;
    type?: string;
}

const useContact = () => {
  const { toast } = useToast();
  const {
    isLoading,
    mutate: postContact,
    data,
  } = useMutation({
    mutationKey: ["contacts"],
    mutationFn: async (contactData:IContact) => await postContactService(contactData),

    onSuccess: () => {
      if(data?.success)
      toast({
        title: "Success",
        description: "Thank you for contacting us. We will get back to you soon.",
        variant: "success",
      });
      else{
        toast({
          title: "Success",
          description: "Thank you for contacting us. We will get back to you soon.",
          variant: "success", 
        });
      }
    },
    onError: () => {
      toast({
        title: "Success",
        description: "Thank you for contacting us. We will get back to you soon.",
        variant: "success", 
      });
    },
  });

  return { isLoading, postContact, data };
};

export default useContact;
