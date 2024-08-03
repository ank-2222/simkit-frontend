
import { Link } from "react-router-dom"
import home1 from "/images/home1.png"
import { Play } from "lucide-react"

function Hero() {
  return (
    <div>

<section className="flex flex-col lg:flex-row justify-center items-start lg:gap-x-[50px] xl:gap-x-[80px] p-8  gap-y-4 lg:gap-y-0 bg-[#E1F6DE]  ">
        <div>
          <img
            src={home1}
            alt="Skills"
            className="  lg:max-w-[450px] xl:max-w-[560px] lg:max-h-[470px] rounded-[1.3rem] "
          />
        </div>
        <div className="w-[100%]  lg:w-[445px] ">
          <p className="text-lime-700 text-base font-semibold font-['Poppins'] leading-7 mb-2">
            Know What to do
          </p>
          <h1 className=" text-gray-950 text-[52px] lg:text-[40px] xl:text-[52px] font-semibold font-jakarta  xl:leading-[110%] tracking-tight leading-[110%] ">
          Grab Your Kit Today!
          </h1>
          <p className=" py-4 lg:py-4 xl:py-6 text-zinc-900 text-base font-normal font-jakarta  leading-relaxed">
          Grab Your Kit Today and revolutionize your dental practice! Our comprehensive kit equips you with cutting-edge tools and supplies for optimal patient care. Streamline procedures, enhance efficiency, and elevate your practice to new heights.
          </p>
          <div className="w-full border-2 flex justify-center items-center gap-x-4 ">

          <Link
            to="/"
            className="flex-1 h-[60px] rounded-[0.6rem] text-[1.2rem] font-semibold bg-black text-white flex justify-center items-center "
          >
            {" "}
            Get Started
          </Link>
          <Link to="/contact"  className=" flex-1 text-right text-zinc-900 text-lg font-bold font-jakarta leading-normal flex justify-center items-center gap-x-4 border-2 border-black/50 rounded-[0.7rem] h-[60px] ">
          <Play/>
          Contact us
          </Link>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default Hero