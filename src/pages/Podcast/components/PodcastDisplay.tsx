import podcast1 from "/images/podcast1.png";
import { Podcast } from "@/Interface/podcast";
import CustomAudioPlayer from "./CustomAudioPlayer";
import { formatDistanceToNow } from 'date-fns';
interface PodcastDisplayProps {
  podcast: Podcast;
}

function PodcastDisplay({ podcast }: PodcastDisplayProps) {



  return (
    <div className="w-full">
      <hr className="bg-black w-full h-[1px]" />
      <div className="flex flex-col lg:flex-row items-start gap-y-4  lg:justify-between lg:items-center gap-x-4 my-8 ">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-x-4">
          <img
            src={podcast?.image_url || podcast1}
            className="min-w-[100px] h-[100px] object-cover border-2  rounded-[0.5rem]  "
          ></img>

          <div>
          <p>{podcast?.subtitle}  • {formatDistanceToNow(new Date(podcast?.created_at), { addSuffix: true })}</p>
            <p className="capitalize text-black text-[1.3rem] font-bold font-jakarta leading-[120%]">
              {podcast.title}
            </p>
            <p className="text-neutral-500 text-base font-normal line-clamp-3 font-jakarta leading-[110%]">
              {podcast.description}
            </p>
              <a className="text-cGreen underline">Read more</a>
          </div>
        </div>
        <div className="flex justify-start lg:justify-center  min-w-full md:min-w-[40vw] lg:min-w-[20vw]  items-center flex-row gap-x-4 ">
      <CustomAudioPlayer src={podcast.audio_file} />
          
        
        </div>
      </div>
    </div>
  );
}

export default PodcastDisplay;
