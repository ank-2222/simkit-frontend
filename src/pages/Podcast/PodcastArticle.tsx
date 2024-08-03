import useGetPodcast from "@/Feature/podcast/useGetPodcast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Podcast as PodcastType } from "@/Interface/podcast";
import CustomAudioPlayer from "./components/CustomAudioPlayer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import PodcastForm from "./components/PodcastForm";
import podbeat from "/images/icons/podbeat.png";
import spotify from "/images/icons/spotify.png";
import applePodcast from "/images/icons/applePodcast.png";
import Skeleton from "react-loading-skeleton";
import PodcastNavigation from "./components/PodcastNavigation";
import { User } from "lucide-react";
function PodcastArticle() {
  const { id } = useParams();
  const [podcastData, setPodcastData] = useState<PodcastType>();
  const { isLoading, getPodcast, data } = useGetPodcast(id);
  useEffect(() => {
    getPodcast();
  }, []);
  useEffect(() => {
    if (data && data.podcast) {
      setPodcastData(data.podcast);
    }
  }, [data]);

  return (
    <div className=" py-16  ">
      <div className="xl:w-[90%] w-[100vw] m-auto px-4 md:px-6 font-jakarta ">
        {!isLoading ? (
          <div>
            <div className="hidden md:block">

            <PodcastNavigation currentPodcastId={podcastData?.id||""} />
            </div>
            <section className="mt-[20px] lg:mt-[50px] w-full flex justify-around gap-x-10 items-start ">
              <div className="flex-1 ">
                <h1 className="font-jakarta text-[2.25rem] font-bold leading-[125%]  text-left  ">
                  {podcastData?.title}
                </h1>
                <p className="flex justify-start items-center gap-x-2 font-jakarta text-[0.9rem] my-2 font-semibold   ">
                  <span>
                    {moment(podcastData?.created_at).format("MMMM DD, YYYY")}
                  </span>
                  •
                  <span className="flex justify-center items-center gap-x-1">
                    <User size={16} />
                    {podcastData?.author}
                  </span>
                </p>

                <p className=" text-base text-left ">
                  {podcastData?.description}
                </p>
                <div className="flex justify-start items-start w-full my-8">
                  <CustomAudioPlayer
                    isArticlePage={true}
                    src={podcastData?.audio_file || ""}
                  />
                </div>
                <div
                  className="article_data"
                  dangerouslySetInnerHTML={{
                    __html: podcastData?.article || "",
                  }}
                />

                <div className="flex justify-start items-center  mt-10 gap-x-4 flex-wrap">
                  <p className="text-black text-2xl font-bold  leading-9">
                    Like this? Share it here at
                  </p>
                  <div className="flex flex-row justify-start items-end gap-x-4  ">
                    <a>
                      <FaInstagram
                        size={36}
                        className="text-white p-[5px] bg-cGreen rounded-[0.4rem]   "
                      />
                    </a>
                    <a>
                      <FaLinkedin
                        size={36}
                        className="text-white p-[5px] bg-cGreen rounded-[0.4rem]   "
                      />
                    </a>
                    <a>
                      <FaFacebook
                        size={36}
                        className="text-white p-[5px] bg-cGreen rounded-[0.4rem]   "
                      />
                    </a>
                    <a>
                      <FaPinterest
                        size={36}
                        className="text-white p-[5px] bg-cGreen rounded-[0.4rem]    "
                      />
                    </a>
                    <a>
                      <FaMailBulk
                        size={36}
                        className="text-white p-[5px] bg-cGreen rounded-[0.4rem]   "
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className=" hidden lg:block  w-[30%] border-2 rounded-[0.4rem] h-fit p-4">
                <h1 className="text-zinc-900 text-[32px] font-extrabold font-jakarta leading-[110%]">
                  Subscribe to the Podcast on
                </h1>
                <div className="flex justify-start items-center  flex-wrap my-8 gap-2 ">
                  <div className="flex justify-center gap-x-2 items-center border-2 px-2 py-1 rounded-[0.4rem] w-fit   ">
                    <img
                      className="w-8 h-8 rounded-xl"
                      src={spotify}
                      alt="Spotify"
                    />
                    <p className="text-zinc-900 text-lg font-semibold font-jakarta leading-[18px]">
                      Spotify
                    </p>
                  </div>
                  <div className="flex justify-center gap-x-2 items-center border-2 px-2 py-1 rounded-[0.4rem]  w-fit ">
                    <img
                      className="w-8 h-8 rounded-xl"
                      src={applePodcast}
                      alt="Spotify"
                    />
                    <p className="text-zinc-900 text-lg font-semibold font-jakarta leading-[18px]">
                      Apple Podcasts
                    </p>
                  </div>
                  <div className="flex justify-center gap-x-2 items-center border-2 px-2 py-1 rounded-[0.4rem]  w-fit ">
                    <img
                      className="w-8 h-8 rounded-xl"
                      src={podbeat}
                      alt="Spotify"
                    />
                    <p className="text-zinc-900 text-lg font-semibold font-jakarta leading-[18px]">
                      Podbeat
                    </p>
                  </div>
                </div>
                <PodcastForm />
              </div>
            </section>
            <PodcastNavigation currentPodcastId={podcastData?.id||""} />

          </div>
        ) : (
          <div className="mt-[20px] lg:mt-[50px]">
            <Skeleton height={100} />
            <Skeleton className="h-10 max-w-[400px]  " />
            <Skeleton className="h-[100px] " />
            <Skeleton className="h-[100px] " />
            <Skeleton className="h-10 mt-6 max-w-[300px]  " />
            <Skeleton className="h-[100px]  " />
            <Skeleton className="h-10 mt-6 max-w-[300px]  " />
            <Skeleton className="h-[100px]  " />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PodcastArticle;
