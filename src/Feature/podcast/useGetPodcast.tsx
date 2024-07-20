/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import { getAllPodcastService, getPodcastByIdService } from "@/service/podcast";
import { useMutation } from "@tanstack/react-query";

const useGetPodcast = (id?:string) => {
    const { toast } = useToast();

    const {
        isLoading,
        mutate: getPodcast,
        data,
    } = useMutation({
        mutationKey: id ? ["podcast", id] : ["podcasts"],
        mutationFn: async () => id ? await getPodcastByIdService(id) : await getAllPodcastService(),
      
        onError: (error:any) => {
            toast({
                title: "Error",
                description: error.message,
                variant: "error",
            });
        },
    });

    return { isLoading, getPodcast, data };
};

export default useGetPodcast;
