import { Play } from "lucide-react"
import { Link } from "react-router-dom"
import podbeat from "/images/icons/podbeat.png";
import spotify from "/images/icons/spotify.png";
import applePodcast from "/images/icons/applePodcast.png";
import PodcastForm from "./PodcastForm";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center lg:items-end lg:flex-row gap-x-8 xl:gap-x-14 ">

        <section className="my-8 lg:w-[50vw] xl:w-[45vw]  ">
            <h1 className=" text-zinc-900 text-[52px] font-extrabold font-jakarta leading-[62px] my-4  ">Podcast</h1>
            <p className=" text-zinc-600 text-lg font-normal font-['Inter'] leading-[110%]">Welcome to the SimKit emergency medicine physician podcast. Musing on medical procedural training, skillset decay and maintenance, case discussions and reviews, and much much more.</p>

            <div className="flex flex-row justify-start items-center mt-6 gap-x-4 w-full lg:w-[60%] ">
            <div className="flex-1 w-full  h-14 p-4 left-0 top-0  bg-black rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
              <button className="justify-center items-center gap-[9px] inline-flex">
                <div className="text-right text-white text-lg font-bold font-jakarta leading-normal">
                  Get Started
                </div>
              </button>
            </div>
            <div className="flex-1 w-full h-14 p-4  top-0  rounded-[10px] border-2 border-zinc-400 flex-col justify-center items-center gap-2.5 inline-flex">
              <Link
                to="/"
                className="w-[126px] justify-center items-center gap-1 inline-flex"
              >
                <Play size={20} />

                <div className="text-right text-zinc-900 text-lg font-bold font-jakarta leading-normalr">
                  Contact Us
                </div>
              </Link>
            </div>
            </div>
        </section>

        <section className="py-8 lg:w-[50vw] xl:w-[45vw] ">

            <div className="bg-white rounded-[0.5rem] py-8 md:px-8 lg:px-4 xl:px-14 ">
                 <h1 className="text-zinc-900 text-[32px] font-extrabold font-jakarta leading-[110%]">
                 Subscribe to the Podcast on
                 </h1>
                 <div className="flex justify-start items-center  flex-wrap my-8 gap-2 ">
                    <div className="flex justify-center gap-x-2 items-center border-2 px-2 py-1 rounded-[0.4rem] w-fit   ">
                        <img className="w-10 h-10 rounded-xl" src={spotify} alt="Spotify" />
                        <p className="text-zinc-900 text-xl font-semibold font-jakarta leading-[18px]">Spotify</p>
                    </div>
                    <div className="flex justify-center gap-x-2 items-center border-2 px-2 py-1 rounded-[0.4rem]  w-fit ">
                        <img className="w-10 h-10 rounded-xl" src={applePodcast} alt="Spotify" />
                        <p className="text-zinc-900 text-xl font-semibold font-jakarta leading-[18px]">Apple Podcasts</p>
                    </div>
                    <div className="flex justify-center gap-x-2 items-center border-2 px-2 py-1 rounded-[0.4rem]  w-fit ">
                        <img className="w-10 h-10 rounded-xl" src={podbeat} alt="Spotify" />
                        <p className="text-zinc-900 text-xl font-semibold font-jakarta leading-[18px]">Podbeat</p>
                    </div>
                 </div>

    <PodcastForm/>

            </div>
        </section>

    </div>
  )
}

export default Hero