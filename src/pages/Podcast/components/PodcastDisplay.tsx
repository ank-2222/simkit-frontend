import { Play } from "lucide-react";
import podcast1 from "/images/podcast1.png";

function PodcastDisplay() {
  return (
    <div>
      <hr className="bg-black w-full h-[1px]" />
      <div className="flex flex-col lg:flex-row items-start gap-y-4  lg:justify-center lg:items-center gap-x-4 my-8 ">
        <img
          src={podcast1}
          className="w-[100px]   h-[100px] rounded-[0.5rem]  "
        ></img>

        <div>
          <p className="text-lime-700 text-lg font-bold font-jakata leading-[27px]">
            January 2024
          </p>
          <p className="text-black text-[1.5rem] font-bold font-jakarta leading-[120%]">
            #20 - Keep ‘Em Cool, But Not Too Cool- AHA recs on TTM in post-ROSC
            care with Dr. Mike Burla
          </p>
          <p className="text-neutral-500 text-lg font-normal font-jakarta leading-[110%]">
            In this podcast we review the most recent AHA recs on TTM...{" "}
            <a className="text-cGreen underline">Read more</a>
          </p>
        </div>
        <div className="flex justify-center lg:w-[20vw] items-center flex-row gap-x-4 ">
          <Play
            size={20}
            className="text-white bg-cGreen w-8 h-8 rounded-[50px] p-2  "
          />
          <p className="text-stone-900 text-2xl font-bold font-jakarta leading-[110%]   ">
            32 mins
          </p>
        </div>
      </div>
    </div>
  );
}

export default PodcastDisplay;
