/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import { orderError } from "@/Enums/error";
import { getAllOrderService } from "@/service/order";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useGetOrder = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    isLoading,
    mutate: getOrder,
    data,
  } = useMutation({
    mutationKey: ["orders"],
    mutationFn: async () => await getAllOrderService(),

    onError: (error: any) => {
      if (error.message === `Error: ${orderError.TOKEN_NOT_FOUND}`) {
        navigate("/auth?ahead=order");
        return;
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "error",
        });
      }
    },
  });

  return { isLoading, getOrder, data };
};

export default useGetOrder;
