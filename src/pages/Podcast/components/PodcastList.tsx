/* eslint-disable @typescript-eslint/no-explicit-any */
import PodcastDisplay from "./PodcastDisplay";

import useGetPodcast from "@/Feature/podcast/useGetPodcast";
import { Podcast } from "@/Interface/podcast";
import { useEffect } from "react";

function PodcastList() {
  const {getPodcast,data:podcastData}=useGetPodcast();
  useEffect(()=>{
    getPodcast();
  },[])
  return (
    <div className="w-full" >
      <section>
        <p className="text-left text-black text-base font-semibold font-['Roboto'] leading-normal">Listen to Podcasts</p>
        <h1 className="text-black text-5xl font-bold font-jakarta leading-[125%]">Your podcasts</h1>
        <p className=" text-black text-lg font-normal font-jakarta mt-4 leading-[110%] lg:max-w-[60vw] ">
          Your physical + digital subscription includes exclusive printed
          content delivered to your door, full digital access on all devices,
          bonus online features, and members-only perks and discounts.
        </p>
      </section>

        <section className="flex flex-col justify-center items-center min-w-full mt-[50px] ">
{
           podcastData&& podcastData?.podcasts?.map((podcast:Podcast)=>{
              return <PodcastDisplay key={podcast.id} podcast={podcast}/>
            })  
}

           
        </section>


    </div>
  );
}

export default PodcastList;
