import podcast1 from "/images/podcast1.png";
import { Podcast } from "@/Interface/podcast";
import CustomAudioPlayer from "./CustomAudioPlayer";
import { formatDistanceToNow } from 'date-fns';
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface PodcastDisplayProps {
  podcast: Podcast;
}

function PodcastDisplay({ podcast }: PodcastDisplayProps) {

 const navigate = useNavigate();

  return (
    <div className="w-full font-jakarta">
      <hr className="bg-black w-full h-[2px] my-2" />
      <div className="flex flex-col lg:flex-row items-start gap-y-4  lg:justify-between lg:items-center gap-x-4 my-8 ">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-x-4">
          <img
            src={podcast?.image_url || podcast1}
            className="w-[120px] h-[120px] object-cover border-2  rounded-[0.5rem]  "
          ></img>

          <div>
          <p className="flex justify-start items-center gap-x-1 pb-1"><User size={16}/> 
          <span className="pr-2">
          {podcast?.author}
          </span>
           •
          <span className="pl-2">
          {formatDistanceToNow(new Date(podcast?.created_at), { addSuffix: true })}
          </span>
         </p>
            <p className="capitalize text-black text-[1.3rem] font-bold font-jakarta leading-[120%]">
              {podcast.title}
            </p>
            <p className="text-neutral-500 text-base font-normal line-clamp-2 font-jakarta leading-[110%] mt-2">
              {podcast.description}
            </p>
              <a className="text-cGreen underline cursor-pointer"  onClick={()=>{
                navigate(`/podcast/${podcast.id}`);
              }} >Read more</a>
          </div>
        </div>
        <div className="flex justify-start lg:justify-center  min-w-full md:min-w-[40vw] lg:min-w-[20vw]  items-center flex-row gap-x-4 ">
      <CustomAudioPlayer isArticlePage={false} src={podcast.audio_file} />
          
        
        </div>
      </div>
    </div>
  );
}

export default PodcastDisplay;
