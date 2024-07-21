import useGetPodcast from "@/Feature/podcast/useGetPodcast";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useEffect, useMemo } from "react";

interface PodcastNavigationProps {
    currentPodcastId: string;
}

function PodcastNavigation({ currentPodcastId }: PodcastNavigationProps) {
    const { getPodcast, data } = useGetPodcast();
    useEffect(() => {
        getPodcast();
    }
    , []);
    const nextPodcast = useMemo(() => {
        if (!data?.podcasts || data.podcasts.length === 0) return null;
        
        const currentIndex = data.podcasts.findIndex((podcast: { id: string; }) => podcast.id === currentPodcastId);
        
        // If current podcast is found and there is a next podcast
        if (currentIndex !== -1 && currentIndex < data.podcasts.length - 1) {
            return data.podcasts[currentIndex + 1];
        }

        return null;
    }, [data, currentPodcastId]);

    return (
        <div>
            <div className="flex justify-between items-center mt-14">
                <a
                    href="/podcast"
                    className="text-gray-800 font-semibold border-2 px-4 py-2 flex justify-center w-fit gap-x-4 items-center"
                >
                    <ChevronLeftCircle size={20} />
                    Go back to Podcasts
                </a>
                {nextPodcast ? (
                    <a
                        href={`/podcast/${nextPodcast.id}`}
                        className="text-gray-800 font-semibold border-2 px-4 py-2 flex justify-center max-w-[400px] gap-x-4 items-center  "
                    >
                        <span className="line-clamp-1">
                       View Next: {nextPodcast.title}
                        </span>
                        <span>

                        <ChevronRightCircle size={20} />
                        </span>
                    </a>
                ) : (
                    null
                )}
            </div>
        </div>
    );
}

export default PodcastNavigation;
