import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-[100vw] "
    >
      <div className="py-[60px] bg-white  items-center gap-12 flex flex-col justify-center  ">
        <div className="flex-col justify-start items-center gap-7 flex">
          <div className="flex-col justify-start items-center gap-5 flex">
            <motion.div className="lg:w-[627px] w-[95%]  h-[124px] relative">
              <div className="w-[223px] h-[62px] left-[220px] lg:left-[333px] bottom-0 absolute">
                <div className="lg:w-[200px] w-[150px] h-[36.82px] left-[0px] top-[10px] absolute bg-gradient-to-r from-sky-400 via-red-400 to-red-400 blur-[15px] opacity-60" />
              </div>
              <div className="lg:w-[627px]  left-0 top-0 absolute text-center text-zinc-900 text-[2.5rem] lg:text-[52px] font-bold font-jakarta leading-[125%]">
                Procedural Training Delivered To You
              </div>
            </motion.div>
            <div className="lg:max-w-[70%] w-[95%] lg:px-0 text-center text-zinc-600 text-[1.1rem] lg:text-lg font-normal font-['Inter'] leading-7">
              SimKit is a medical education company focused on delivering
              procedural training to clinicians. SimKit helps Emergency Medicine
              clinicians gain confidence in their procedural skills. Our
              convenient 12-month curriculum arrives monthly at your door to
              give you the digital learning and hands-on experience you need to
              fight skill decay.
            </div>
          </div>
          <div className="lg:w-[461px] w-full px-2 lg:px-0 h-14 flex flex-row justify-center items-center gap-x-4 lg:gap-x-8">
            <div className="lg:w-[222px] w-[45%] h-14 p-4 left-0 top-0  bg-black rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
              <button className="justify-center items-center gap-[9px] inline-flex">
                <div className="text-right text-white text-lg font-bold font-jakarta leading-normal">
                  Get Started
                </div>
              </button>
            </div>
            <div className="lg:w-[220px] w-[45%] h-14 p-4  top-0  rounded-[10px] border-2 border-zinc-400 flex-col justify-center items-center gap-2.5 inline-flex">
              <Link
                to="/"
                className="w-[126px] justify-center items-center gap-1  inline-flex"
              >
                <Play size={20} />

                <div className="text-right text-zinc-900 text-lg font-bold font-jakarta leading-normalr">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>

        <section className="relative  ">
          <div className="lg:h-[530px] lg:w-[800px] min-w-[400px]  aspect-video border-2 relative bg-white z-[2]  mt-[20px] lg:mt-0 flex justify-center items-center">
            <p className="text-[#808080] text-[1.4rem] "> video</p>
          </div>
          <div className="lg:w-[800px] lg:h-[530px] w-[400px] h-[180px] left-0 top-[40px] lg:top-0 absolute rotate-180 bg-gradient-to-r from-blue-500  via-red-400 to-yellow-300 blur-[30px] opacity-50  " />
        </section>
      </div>
    </motion.div>
  );
}

export default Hero;
