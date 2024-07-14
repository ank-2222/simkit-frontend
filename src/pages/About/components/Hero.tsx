import aboutImg from "/images/login.jpg";

function Hero() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center items-start mt-[50px] gap-x-12 xl:gap-x-20 ">
        <img className="w-full lg:w-[35vw]  h-[40vh] lg:h-[80vh] object-cover object-center rounded-[0.5rem]   " src={aboutImg}></img>
        <div className="w-full lg:w-[40vw]">
          <p className="text-cGreen text-base font-semibold font-['Poppins'] leading-7">
            Know what to do
          </p>
          <h1 className=" text-gray-950 text-[2.25rem] font-bold font-jakarta leading-[62px] ">About us</h1>
          <p className="text-zinc-900 text-base font-normal font-jakarta leading-relaxed">
            SimKit believes emergency medicine clinicians should not have to
            fight skill set decay on their own. Our integrated platform includes
            easy-to-use simulation models, step-by-step procedural videos,
            regional anesthesia instructional pages, and point-of-care
            infographics. You'll find everything you need to get sharp and stay
            sharp.
            <br />
            <br />
            As a community-based Emergency Medicine physician, I found my
            procedural competency was my own to manage - sink or swim.
            <br />
            <br />
            After a difficult case, I pledged to not leave my patient care and
            outcomes up to chance. I repeatedly reviewed my notes so I could
            quickly recognize the need for an emergency procedure and I found
            ways to practice key motor skills until I had complete muscle
            memory.
            <br />
            <br />
            Then, I asked an important question: “shouldn't all ED docs have
            this?” SimKit makes what I built for myself available to all, right
            at their doorstep.
            <br />
            <br />
            Don't fight procedural skill set decay on your own. SimKit will meet
            you where you're at, and make your learning fast and easy so you can
            maintain your competence and confidence.
            <br />
            <br />
            <strong>- Jason Hine, MD | Founder</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
