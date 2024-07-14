import jason from "/images/jason.png";
import isaac from "/images/isaac.png";
import rose from "/images/rose.png";
import twitter from "/images/icons/twitter.svg";
import linkedin from "/images/icons/linkedin.svg";
function Team() {
  return (
    <div>
      <section className="mt-[50px] ">
        <p className="text-black text-base font-semibold font-jakarta leading-normal">
          The people who make it happen!
        </p>
        <h1 className=" text-black text-5xl font-bold font-jakarta my-4 leading-[125%]">
          Our team
        </h1>
        <p className=" text-black text-lg font-normal font-jakarta mt-1  leading-[110%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      <section className=" flex flex-col  gap-y-8 lg:flex-row justify-center items-start gap-x-12 mt-[50px] ">
        <div className="w-full h-full lg:w-[30vw]  ">
          <img src={jason} className="w-full h-full border-2 rounded-xl" />
          <div>
            <p className=" text-black text-xl font-bold font-jakarta leading-[30px]">
              {" "}
              Jason Hine, MD
            </p>
            <p className=" text-black text-[1rem] font-normal font-jakarta leading-[27px]">
              {" "}
              Founder, Chief Academic Officer
            </p>
            <p className=" text-justify text-black text-base font-normal font-jakarta leading-normal my-4  ">
              Jason is a board-certified Emergency Medicine physician who
              received his medical degree from Tufts University and did his
              residency at Temple University.
              <br />
              He is deeply passionate about digital education and procedural
              skill set decay, as well as the role of academia/education in
              improving recruitment, retention, and satisfaction amongst
              community providers. He is currently an Attending Physician at
              Southern Maine Health Care.
            </p>
            <div className="flex justify-start items-center flex-row gap-x-4 my-2">
              <a className="bg-cGreen/20 h-10 w-10 flex justify-center items-center rounded-[0.5rem] ">
                <img src={linkedin}></img>
              </a>
              <a className="bg-cGreen/20 h-10 w-10 flex justify-center items-center rounded-[0.5rem] ">
                <img src={twitter}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-[30vw]  ">
          <img src={rose} className="w-full h-full  border-2 rounded-xl" />
          <div>
            <p className=" text-black text-xl font-bold font-jakarta leading-[30px]">
              {" "}
              Sue Rose-Norfleet, EdD, MPH
            </p>
            <p className=" text-black text-[1rem] font-normal font-jakarta leading-[27px]">
              {" "}
              Chief Operations Officer
            </p>
            <p className=" text-justify text-black text-base font-normal font-jakarta leading-normal my-4  ">
              Sue earned an EdD, in Educational Leadership and Administration
              from the University of New England and a Master of Public Health
              (M.P.H.) at the University of New England. Sue’s skill set
              includes the management of large projects, especially in the areas
              of healthcare and education. She is committed to making continuing
              healthcare education impactful and engaging. She is a Program
              Manager at Maine Medical Center and an Assistant Professor at
              Tufts University School of Medicine.
            </p>
            <div className="flex justify-start items-center flex-row gap-x-4 my-2">
              <a className="bg-cGreen/20 h-10 w-10 flex justify-center items-center rounded-[0.5rem] ">
                <img src={linkedin}></img>
              </a>
              <a className="bg-cGreen/20 h-10 w-10 flex justify-center items-center rounded-[0.5rem] ">
                <img src={twitter}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-[30vw]  ">
          <img src={isaac} className="w-full h-full border-2 rounded-xl" />
          <div>
            <p className=" text-black text-xl font-bold font-jakarta leading-[30px]">
              {" "}
              Isaac Stickney, MEd, CGS
            </p>
            <p className=" text-black text-[1rem] font-normal font-jakarta leading-[27px]">
              {" "}
              Curriculum Designer
            </p>
            <p className=" text-justify text-black text-base font-normal font-jakarta leading-normal my-4  ">
              Isaac earned a Certificate of Advanced Graduate Study in
              Instructional Systems Technology at Indiana University after
              receiving a Master of Education from Upper Iowa University. He is
              an experienced curriculum designer in the healthcare education
              field with expertise in instructional design and learning
              management systems. He works as a Curriculum Designer at Maine
              Medical Center and holds an appointment as an Assistant Professor
              with Tufts University School of Medicine.
            </p>
            <div className="flex justify-start items-center flex-row gap-x-4 my-2">
              <a className="bg-cGreen/20 h-10 w-10 flex justify-center items-center rounded-[0.5rem] ">
                <img src={linkedin}></img>
              </a>
              <a className="bg-cGreen/20 h-10 w-10 flex justify-center items-center rounded-[0.5rem] ">
                <img src={twitter}></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
