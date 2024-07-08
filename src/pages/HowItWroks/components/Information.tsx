import boxicon from "/images/boxIcon.svg";
import { motion } from "framer-motion";
import quiz from "/images/icons/quiz.svg";
import film from "/images/icons/film-white.svg";
import book from "/images/icons/book.svg";
import box from "/images/icons/box-white.svg";
import home1 from "/images/home1.png";

import plan1 from "/images/plan1.png";
import plan2 from "/images/plan2.png";
import plan3 from "/images/plan3.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Information() {
  return (
    <div className="flex flex-col max-w-[100vw] justify-center item-center m-0 p-0 ">
      <section className="flex flex-col px-4 md:px-8  lg:flex-row justify-start items-start xl:px-[100px] xl:gap-x-8 m-auto">
        <div>
          <p className="text-left w-full  text-black text-base font-semibold font-jakarta leading-normal  ">
            How does it work?
          </p>
          <h1 className=" py-1 text-black text-5xl font-bold font-jakarta leading-[110%]  ">
            How SimKit Works
          </h1>
          <p className=" text-black text-[1.1rem] font-normal font-jakarta leading-[27px]">
            A one year subscription includes everything an emergency medicine
            physician needs to master important acute procedures, including:
          </p>
        </div>

        <div className="mt-[20px] md:mt-0 flex flex-col justify-center items-center md:flex-row flex-wrap md:justify-start md:items-start ">
          <motion.div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-y-1 my-2 border-2 md:border-0 border-black/10  rounded-[1rem] p-4 lg:my-0">
            <img src={boxicon} className="h-10 w-10" />
            <h3 className=" text-black text-[32px] font-bold font-jakarta leading-[41.60px]">
              Infographics and more...
            </h3>
            <p className=" text-black text-base font-normal font-jakarta leading-normal">
              Supporting resources including infographics and point of care
              guides like our procedural and regional anesthesia libraries.
            </p>
          </motion.div>
          <motion.div className="w-full md:w-[50%]  flex flex-col justify-start items-start gap-y-1 my-2 border-2 md:border-0 border-black/10  rounded-[1rem] p-4 lg:my-0">
            <img src={boxicon} className="h-10 w-10" />
            <h3 className=" text-black text-[32px] font-bold font-jakarta leading-[41.60px]">
              Included kit and supplies
            </h3>
            <p className=" text-black text-base font-normal font-jakarta leading-normal">
              A kit delivered to your door every month with a model and supplies
            </p>
          </motion.div>
          <motion.div className="w-full md:w-[50%]  flex flex-col justify-start items-start gap-y-1 my-2 border-2 md:border-0 border-black/10  rounded-[1rem] p-4 lg:my-0">
            <img src={boxicon} className="h-10 w-10" />
            <h3 className=" text-black text-[32px] font-bold font-jakarta leading-[41.60px]">
              Interactive Learning
            </h3>
            <p className=" text-black text-base font-normal font-jakarta leading-normal">
              12 months of interactive learning sessions
            </p>
          </motion.div>
          <motion.div className="w-full md:w-[50%]  flex flex-col justify-start items-start gap-y-1 my-2 border-2 md:border-0 border-black/10  rounded-[1rem] p-4 lg:my-0">
            <img src={boxicon} className="h-10 w-10" />
            <h3 className=" text-black text-[32px] font-bold font-jakarta leading-[41.60px]">
              E-Mail Reminders
            </h3>
            <p className=" text-black text-base font-normal font-jakarta leading-normal">
              Email reminders to complete your learning
            </p>
          </motion.div>
        </div>
      </section>

      <section className="  px-4 my-[50px] xl:mx-[50px] ">
        <div className="md:mx-8 ">
          <h1 className=" text-black text-[40px] font-bold font-['Roboto'] leading-[125%]">
            Automates your plan for learning
          </h1>
          <p className=" text-black text-lg font-normal font-['Roboto'] leading-[1.5rem]">
            Most emergency medicine physicians have good intentions, but it’s
            hard to find the time to practice procedural skills. In less time
            than it takes to watch your next show on Netflix, you can gain
            proficiency in critical emergency procedures.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-8 mt-[30px] lg:flex-row flex-wrap lg:justify-around lg:items-start lg:mt-[50px] xl:mt-[80px] ">
          <div className="shadow-md p-4 max-w-[400px] lg:max-w-[300px] xl:max-w-[400px] md:h-[410px] lg:h-fit lg:shadow-none lg:p-0  ">
            <img src={plan1} className=" h-[200px] w-full object-cover " />
            <h4 className=" text-black text-2xl font-bold font-['Roboto'] leading-[125%] mt-4">
              Reminder email with link
            </h4>
            <p className=" text-black text-base font-normal font-['Roboto'] leading-normal mt-2 text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="shadow-md p-4 max-w-[400px] lg:max-w-[300px] xl:max-w-[400px] md:h-[410px]  lg:h-fit lg:shadow-none lg:p-0 ">
            <img src={plan2} className=" h-[200px] w-full object-cover " />
            <h4 className=" text-black text-2xl font-bold font-['Roboto'] leading-[125%] mt-4">
              Kit arrives to your door with nearly everything you need
            </h4>
            <p className=" text-black text-base font-normal font-['Roboto'] leading-normal mt-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="shadow-md p-4 max-w-[400px] lg:max-w-[300px] xl:max-w-[400px] md:h-[410px]  lg:h-fit lg:shadow-none lg:p-0 ">
            <img src={plan3} className=" h-[200px] w-full object-cover " />
            <h4 className=" text-black text-2xl font-bold font-['Roboto'] leading-[125%] mt-4">
              Practice for 30 minutes
            </h4>
            <p className=" text-black text-base font-normal font-['Roboto'] leading-normal mt-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[80px] py-8 lg:p-[100px] w-[100%]   m-auto  flex flex-col items-center justify-center bg-[#E1F6DE]   ">
        <div className="flex flex-col justify-start items-start w-full  gap-y-4 px-4 lg:px-0">
          <p className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">
            What’s on offer?
          </p>
          <h1 className="text-black lg:text-5xl text-[2.5rem] font-bold font-jakarta  leading-[110%]">
            Cross media learning experience
          </h1>
          <p className=" text-black text-lg font-normal font-jakarta  leading-[30px] mt-[10px] ">
            The SimKit platform combines online learning with hands-on practice.
          </p>
        </div>

        <div className="md:mt-[80px] mt-[20px]   w-full m-auto ">
          <div className="flex flex-col md:flex-row flex-wrap justify-center xl:justify-between  lg:items-start item-center gap-x-8 gap-y-8   lg:px-0 xl:flex-none px-4 md:px-0 ">
            <motion.div
              className="md:w-[45%] xl:w-fit flex flex-col justify-start items-start gap-y-1 "
              // initial={{ y: -100, opacity: 0 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // transition={{ duration: 1, delay: 0 }}
              // viewport={{ once: true }}
            >
              <div className="flex md:flex-col  justify-start items-end md:items-start gap-x-4">
                <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                  <img
                    className=" h-[50px] w-[50px] rounded-xl bg-cGreen p-[15px] "
                    src={book}
                  ></img>
                </div>
                <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px] md:mt-[15px] ">
                  Read
                </p>
              </div>
              <p className="lg:w-[300px] text-left text-black text-base font-normal font-jakarta  leading-normal md:mt-[15px]">
                Step-by-step instructions, indications, contraindications, and
                material lists.
              </p>
            </motion.div>
            <motion.div className="md:w-[45%] xl:w-fit  flex flex-col justify-start items-start gap-y-1 ">
              <div className="flex md:flex-col  justify-start items-end md:items-start gap-x-4">
                <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                  <img
                    className=" h-[50px] w-[50px] rounded-xl bg-cGreen p-[15px] "
                    src={film}
                  ></img>
                </div>
                <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px]  md:mt-[15px] ">
                  Watch
                </p>
              </div>
              <p className="lg:w-[300px] text-left text-black text-base font-normal font-jakarta leading-normal  md:mt-[15px]">
                Videos on the procedures as well as the practice exercises.
              </p>
            </motion.div>
            <motion.div className="md:w-[45%]  xl:w-fit  flex flex-col justify-start items-start gap-y-1">
              <div className="flex md:flex-col  justify-start items-end md:items-start gap-x-4">
                <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                  <img
                    className=" h-[50px] w-[50px] rounded-xl bg-cGreen p-[15px] "
                    src={box}
                  ></img>
                </div>
                <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px]  md:mt-[15px] ">
                  Practice
                </p>
              </div>
              <p className="lg:w-[300px] text-left text-black text-base font-normal font-jakarta leading-normal md:mt-[15px]">
                Using your SimKit model to improve fine motor skills.
              </p>
            </motion.div>
            <motion.div className="md:w-[45%] xl:w-fit  flex flex-col justify-start items-start gap-y-1 ">
              <div className="flex md:flex-col  justify-start items-end md:items-start gap-x-4">
                <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                  <img
                    className=" h-[50px] w-[50px] rounded-xl bg-cGreen p-[15px] "
                    src={quiz}
                  ></img>
                </div>
                <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px]  md:mt-[15px] ">
                  Quiz
                </p>
              </div>
              <p className="lg:w-[300px] text-left text-black text-base font-normal font-jakarta  leading-normal  md:mt-[15px]">
                Yourself using reflective, non-graded interactive quizzes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-start lg:gap-x-[50px] xl:gap-x-[80px] p-8 lg:mt-[60px] mt-[30px] gap-y-4 lg:gap-y-0   ">
        <div>
          <img
            src={home1}
            alt="Skills"
            className="  lg:max-w-[450px] xl:max-w-[560px] lg:max-h-[470px] rounded-[1.3rem] "
          />
        </div>
        <div className="w-[100%]  lg:w-[445px] ">
          <h1 className=" text-gray-900 text-[2.5rem]  font-semibold font-jakarta leading-[110%] tracking-tight">
            What’s included?
          </h1>
          <div className="mt-[30px] lg:mt-[20px] xl:mt-[30px] ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[1.1rem]  ">Models & supplies sent monthly</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[1.1rem]  ">Multimedia resource library</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[1.1rem]  ">12 months of curriculum</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[1.1rem]  ">Most critical acute procedures</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-[1.1rem]  ">Point of care resources</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Information;
