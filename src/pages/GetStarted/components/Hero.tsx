

import { motion } from "framer-motion";
import boxicon from "/images/boxIcon.svg";

function Hero() {
  return (
    <div>
        <section className="w-full px-4 flex flex-col gap-y-2 mt-[30px]  m-auto ">
            <p className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">Get Started</p>
            <h1 className="text-center text-black text-[2.5rem] font-bold font-jakarta leading-[110%]">
            Get Started with your CME Kit!
            </h1>
            <p className=" text-center text-black text-base font-normal font-['Roboto']  leading-[110%] lg:max-w-[60%] xl:max-w-[45%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
        </section>


        <section className="mt-[80px] py-16  lg:p-[80px] w-[100%]   m-auto  flex flex-col items-center justify-center bg-[#E1F6DE]   ">
        <div className="flex flex-col justify-start items-start xl:max-w-[95%] gap-y-4 px-4 lg:px-0">
          <p className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">
            What’s on offer?
          </p>
          <h1 className="text-black lg:text-5xl text-[2.5rem] font-bold font-jakarta  leading-[110%]">
          Your physical + digital subscription includes
          </h1>
          <p className=" text-black text-base font-normal font-jakarta  leading-normal mt-[10px] ">
          Your physical + digital subscription includes exclusive printed content delivered to your door, full digital access on all devices, bonus online features, and members-only perks and discounts.
          </p>
        </div>

        <div className="md:mt-[80px] mt-[20px]   xl:max-w-[95%] m-auto ">
          <div className="flex flex-col md:flex-row flex-wrap justify-center   lg:items-start lg:justify-start item-center gap-x-8 gap-y-8   lg:px-0 xl:flex-none px-4 md:px-0 ">
            <motion.div
              className="md:w-[45%]  flex flex-col justify-start items-start gap-y-1 "
              // initial={{ y: -100, opacity: 0 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // transition={{ duration: 1, delay: 0 }}
              // viewport={{ once: true }}
            >
              <div className="flex md:flex-col  justify-start items-end md:items-start gap-x-4">
                <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                  <img
                    className=" h-[50px] w-[50px] rounded-xl   "
                    src={boxicon}
                  ></img>
                </div>
                <p className=" text-black text-[32px] font-bold font-jakarta  leading-[41.60px] md:mt-[15px] ">
                Cancel anytime
                </p>
              </div>
              <p className=" text-left text-black text-base font-normal font-jakarta  leading-normal md:mt-[15px]">
              While we think you’ll love SimKit and all it has to offer, we make cancellation easy as well. If you are not satisfied, email us at info@simkit.co and we will cancel your plan and refund the remainder of your fee.
              </p>
            </motion.div>
            <motion.div className="md:w-[45%]   flex flex-col justify-start items-start gap-y-1 ">
              <div className="flex md:flex-col  justify-start items-end md:items-start gap-x-4">
              <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                  <img
                    className=" h-[50px] w-[50px] rounded-xl   "
                    src={boxicon}
                  ></img>
                </div>
                <p className=" text-black text-[32px] font-bold font-jakarta  leading-[41.60px]  md:mt-[15px] ">
              Free Shipping
                </p>
              </div>
              <p className=" text-left text-black text-base font-normal font-jakarta leading-normal  md:mt-[15px]">
              Free shipping is included for all continental US addresses, Puerto Rico, and Canada.*
              </p>
            </motion.div>
    
          </div>
        </div>
      </section>


    </div>
  )
}

export default Hero