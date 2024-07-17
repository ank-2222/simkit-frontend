import podcast1 from "/images/podcast1.png";
import { Podcast } from "@/Interface/podcast";
import CustomAudioPlayer from "./CustomAudioPlayer";
interface PodcastDisplayProps {
  podcast: Podcast;
}

function PodcastDisplay({ podcast }: PodcastDisplayProps) {



  return (
    <div className="w-full">
      <hr className="bg-black w-full h-[1px]" />
      <div className="flex flex-col lg:flex-row items-start gap-y-4  lg:justify-between lg:items-center gap-x-4 my-8 ">
        <div className="flex justify-start items-start gap-x-4">
          <img
            src={podcast?.image_url || podcast1}
            className="w-[100px]   h-[100px] rounded-[0.5rem]  "
          ></img>

          <div>
            <p className="text-lime-700 text-lg font-bold font-jakata leading-[27px]">
              {/* {podcast.created_at.toL} */}
            </p>
            <p className="text-black text-[1.5rem] font-bold font-jakarta leading-[120%]">
              {podcast.title}
            </p>
            <p className="text-neutral-500 text-lg font-normal font-jakarta leading-[110%]">
              {podcast.description}
              <a className="text-cGreen underline">Read more</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:w-[20vw] items-center flex-row gap-x-4 ">
      <CustomAudioPlayer src={podcast.audio_file} />
          
          {/* <button onClick={play}>
            <Play
              size={20}
              className="text-white bg-cGreen w-8 h-8 rounded-[50px] p-2  "
            />
          </button>
          <p className="text-stone-900 text-2xl font-bold font-jakarta leading-[110%]   ">
            32 mins
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default PodcastDisplay;
