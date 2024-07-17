// import { useToast } from "@/components/ui/use-toast";
import { getAllPodcastService } from "@/service/podcast";
import { useMutation } from "@tanstack/react-query";

const useGetPodcast = () => {
    // const{toast}= useToast();

  const {
    isLoading,
    mutate: getPodcast,
    data,
  } = useMutation({
    mutationKey: ["podcast"],
    mutationFn: async () => await getAllPodcastService(),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { isLoading, getPodcast, data };
};

export default useGetPodcast;
