import useGetPodcast from "@/Feature/podcast/useGetPodcast";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useEffect, useMemo } from "react";
import { Podcast } from "@/Interface/podcast";
import { Link } from "react-router-dom";

interface PodcastNavigationProps {
    currentPodcastId: string;
}

function PodcastNavigation({ currentPodcastId }: PodcastNavigationProps) {
    const { getPodcast, data } = useGetPodcast();

    useEffect(() => {
        getPodcast();
    }, []);

    const nextPodcast = useMemo(() => {
        if (!data?.podcasts || data.podcasts.length === 0) return null;

        const currentIndex = data.podcasts.findIndex((podcast: Podcast) => podcast.id === currentPodcastId);

        

        // If current podcast is found and there is a next podcast
        // if (currentIndex !== -1 && currentIndex < data.podcasts.length - 1) {
        if (currentIndex !== -1 && currentIndex >0) {
            return data.podcasts[currentIndex - 1];
        }

        return null;
    }, [data, currentPodcastId]);

    return (
        <div>
            <div className="flex justify-between items-center my-14 ">
                <Link
                    to="/podcast"
                    className="hidden md:flex justify-center items-center w-fit gap-x-4 text-gray-800 font-semibold border-2 px-4 py-2"
                >
                    <ChevronLeftCircle size={20} />
                    Go back to Podcasts
                </Link>
                {nextPodcast ? (
                    <a
                        href={`/podcast/${nextPodcast.id}`}
                        className="flex justify-center items-center max-w-[400px] gap-x-1 text-gray-800 font-semibold border-2 px-1 py-2"
                    >
                        <span className="line-clamp-1">View Next: {nextPodcast.title}</span>
                        <ChevronRightCircle size={20} className="w-[20%] "   />
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export default PodcastNavigation;
