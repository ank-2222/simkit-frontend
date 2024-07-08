import home1 from "/images/home1.png";
import boxicon from "/images/boxIcon.svg";
import lock from "/images/icons/lock.svg";
import film from "/images/icons/film.svg";
import magic from "/images/icons/magic.svg";
import box from "/images/icons/box.svg";
import home2 from "/images/home2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Homeskill() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center items-start lg:gap-x-[50px] xl:gap-x-[80px] p-8 lg:mt-[60px] mt-[30px] gap-y-4 lg:gap-y-0   ">
        <div>
          <img
            src={home1}
            alt="Skills"
            className="  lg:max-w-[450px] xl:max-w-[560px] lg:max-h-[470px] rounded-[1.3rem] "
          />
        </div>
        <div className="w-[100%]  lg:w-[445px] ">
          <p className="text-lime-700 text-base font-semibold font-['Poppins'] leading-7">
            Know What to do
          </p>
          <h1 className=" text-gray-950 text-[52px] lg:text-[40px] xl:text-[52px] font-semibold font-jakarta  xl:leading-[62px] tracking-tight leading-[110%] ">
            Gain Skills And Confidence
          </h1>
          <p className=" py-4 lg:py-4 xl:py-10 text-zinc-900 text-base font-normal font-jakarta  leading-relaxed">
            Emergency Medicine clinicians are expected to know what to do
            without hesitation. With lives on the line, you must quickly
            diagnose and then execute critical procedures. SimKit will train
            your muscle memory to kick in during these stressful situations.
          </p>
          <Link
            to="/"
            className="w-[220px] h-[60px] rounded-[0.6rem] text-[1.2rem] font-semibold bg-black text-white flex justify-center items-center "
          >
            {" "}
            Get Started
          </Link>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-start xl:gap-x-[100px] lg:gap-x-[50px] p-4  lg:p-16 mt-[60px] bg-[#E1F6DE] ">
        <div className="lg:w-[570px] w-[100%]  ">
          <p className="text-emerald-700 text-base font-semibold font-['Poppins'] leading-7">
            {" "}
            Know What to do
          </p>
          <h1 className=" text-gray-950 text-[52px] font-semibold font-jakarta  leading-[62px] tracking-tight">
            Fight Skill Decay In 30 Minutes A Month
          </h1>
          <p className=" mt-[30px] text-zinc-900 text-base font-normal font-jakarta  leading-relaxed">
            Emergency Medicine clinicians are expected to know what to do
            without hesitation. With lives on the line, you must quickly
            diagnose and then execute critical procedures. SimKit will train
            your muscle memory to kick in during these stressful situations.
          </p>
        </div>

        <div className="mt-[30px] lg:mt-0 ">
          <div className="flex flex-row justify-start items-start  lg:gap-x-8 mb-4 lg:w-[528px] w-[100vw]">
            <div className="w-[10%] flex flex-col justify-center items-center  ">
              <img src={boxicon} alt="boxicon" className="w-10 h-10 mb-2" />
              <div className="w-[2px] lg:h-14 h-16 bg-black" />
            </div>
            <div className="w-[80%] lg:w-[100%] px-2 lg:px-0">
              <h3 className=" text-black text-xl font-bold font-jakarta  leading-7">
                Tailor Made Curriculum
              </h3>
              <p className=" text-zinc-900 text-base  lg:text-[1.1rem]  font-normal font-jakarta  leading-[145%] tracking-tight mt-[10px] ">
                We’ve built our curriculum using evidence-based cognitive
                science—you’ll learn using short, monthly lessons, so that it
                sticks.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start  lg:gap-x-8 mb-4 lg:w-[528px] w-[100vw]">
            <div className="w-[10%] flex flex-col justify-center items-center  ">
              <img src={boxicon} alt="boxicon" className="w-10 h-10 mb-2" />
              <div className="w-[2px] lg:h-20 h-24 bg-black" />
            </div>
            <div className="w-[80%] lg:w-[100%] px-2 lg:px-0">
              <h3 className=" text-black text-xl font-bold font-jakarta  leading-7">
                Specialised kits for practice
              </h3>
              <p className=" text-zinc-900 text-base  lg:text-[1.1rem] font-normal font-jakarta  leading-[145%] tracking-tight mt-[10px]  ">
                Your kits will arrive at your door in monthly boxes. Over your
                12 month curriculum, you will gain mastery in four High Acuity,
                Low Occurrence (HALO) procedures.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start  lg:gap-x-8 mb-4 lg:w-[528px] w-[100vw]">
            <div className="w-[10%] flex flex-col justify-center items-center ">
              <img src={boxicon} alt="boxicon" className="w-10 h-10 mb-2" />
              <div className="w-[2px] lg:h-24 h-36 bg-black" />
            </div>
            <div className="w-[80%] lg:w-[100%] px-2 lg:px-0">
              <h3 className=" text-black text-xl font-bold font-jakarta  leading-7">
                There’s always a spare
              </h3>
              <p className=" text-zinc-900 text-base  lg:text-[1.1rem] font-normal font-jakarta   leading-[145%] tracking-tight mt-[10px]  ">
                You’ll receive multiple boxes for the same procedure, with
                increasingly complex modules. After reviewing the instructional
                video, you’ll practice on SimKit’s low-fidelity models, then
                take a quiz to confirm you’ve got it.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start  lg:gap-x-8 mb-4 lg:w-[528px] w-[100vw]">
            <div className="w-[10%] flex flex-col justify-center items-center   ">
              <img src={boxicon} alt="boxicon" className="w-10 h-10 mb-2" />
            </div>
            <div className="w-[80%] lg:w-[100%] px-2 lg:px-0">
              <h3 className=" text-black text-xl font-bold font-jakarta  leading-7">
                Focus on high stakes procedures
              </h3>
              <p className=" text-zinc-900 text-base  lg:text-[1.1rem]  font-normal font-jakarta  leading-[145%] tracking-tight mt-[10px]  ">
                At SimKit, we focus on the infrequent, high-stakes procedures
                you’ll encounter in emergency care environments such as
                cricothyrotomy, gastroesophageal balloon, tube thoracostomy, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[80px] lg:max-w-[85%] w-[100%]  lg:px-0 m-auto  flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-start items-start w-full  gap-y-4 px-4 lg:px-0">
          <p className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">
            What’s on offer?
          </p>
          <h1 className="text-black lg:text-5xl text-[2.5rem] font-bold font-jakarta  leading-[60px]">
            Your physical + digital subscription includes
          </h1>
          <p className=" text-black text-lg font-normal font-jakarta  leading-[30px] mt-[10px] ">
            Your physical + digital subscription includes exclusive printed
            content delivered to your door, full digital access on all devices,
            bonus online features, and members-only perks and discounts.
          </p>
        </div>

        <div className="mt-[80px]  w-full m-auto ">
          <div className="flex flex-col md:flex-row flex-wrap justify-center lg:items-start item-center gap-x-8 gap-y-8  px-8 lg:px-0">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                <img src={lock}></img>
              </div>
              <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px] mt-[24px] ">
                Physical models for hands-on practice
              </p>
              <p className="lg:w-[300px] text-justify text-black text-base font-normal font-jakarta  leading-normal mt-[24px]">
                Simple and effective simulators are delivered to your doorstep
                along with any key tools for hands-on practice. The kit is yours
                to keep.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                <img src={film}></img>
              </div>
              <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px]  mt-[24px] ">
                Multimedia resource library
              </p>
              <p className="lg:w-[300px] text-justify text-black text-base font-normal font-jakarta leading-normal mt-[24px]">
                Each procedure is complete with indications, contraindications,
                written steps and video guides. This digital library is kept
                up-to-date and is accessible at any time from anywhere with an
                online device. You will also have access to a library of
                regional anesthesia techniques to keep your practice of
                Emergency Medicine on the cutting edge.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                <img src={magic}></img>
              </div>
              <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px]  mt-[24px] ">
                Interactive Learning Modules
              </p>
              <p className="lg:w-[300px] text-justify text-black text-base font-normal font-jakarta leading-normal mt-[24px]">
                The step-by-step curriculum builds skills and muscle memory as
                you watch and practice then reflect with interactive quizzes to
                confirm what you learned.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#E1F6DE] w-[50px]  h-[50px] rounded-xl flex justify-center items-center   ">
                <img src={box}></img>
              </div>
              <p className="lg:w-[300px] text-black text-[32px] font-bold font-jakarta  leading-[41.60px]  mt-[24px] ">
                Point of Care Resources
              </p>
              <p className="lg:w-[300px] text-justify text-black text-base font-normal font-jakarta  leading-normal mt-[24px]">
                These portable cards will remind you of the critical steps. Each
                procedure comes with simple infographics that break things down
                into easy to follow steps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative mt-[110px] ">
        <div>
          <img
            src={home2}
            className="min-w-[100vw] max-h-[85vh]  object-cover lg:block hidden "
          ></img>
        </div>

        <div className=" w-[100%] lg:w-[450px] xl:w-[624px] p-4 md:px-8 lg:p-0 lg:absolute xl:top-20 top-10 right-24 flex flex-col justify-start items-start gap-y-4 bg-[#e9e8e8] lg:bg-transparent ">
          <p className="text-lime-700 text-base font-semibold font-['Poppins'] leading-7">
            Know what to do
          </p>
          <h1 className=" text-gray-950 text-[52px] font-semibold font-jakarta xl:leading-[62px] lg:leading-[110%] tracking-[-0.1rem] ">
            SimKit models keep you sharp
          </h1>
          <hr className="h-[2px] bg-black/20 w-[70%]  " />
          <p className=" text-zinc-900 text-[0.9rem] font-normal font-jakarta leading-relaxed mt-[20px] ">
            It’s difficult to retain the High Acuity, Low Occurrence (HALO)
            procedures you are expected to know. SimKit has created models that
            you can reuse over-and-over to practice each procedure.
            <br />
            Our low-fidelity models are easy to transport and store when not in
            use. You can practice at home, in the office, or in your department-
            really anywhere and anytime. This makes SimKit ideal not just for
            the physician, but for interprofessional education as well. Each
            model allows you to train for high risk, low frequency events.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Homeskill;
