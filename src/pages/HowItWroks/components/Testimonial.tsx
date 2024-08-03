/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircleArrowLeft, CircleArrowRight, Star } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import jason from "/images/jason.png";
import { MouseEventHandler } from "react";
import "./Testimonial.css";
function Testimonial() {
  const customRenderArrowPrev = (
    onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined,
    hasPrev: any,
    label: string | undefined
  ) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-prev"
      >
        <CircleArrowLeft className=" hidden lg:block w-10 h-10 text-black" />
      </button>
    );

  const customRenderArrowNext = (
    onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined,
    hasNext: any,
    label: string | undefined
  ) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-next"
      >
        <CircleArrowRight className="hidden lg:block w-10 h-10 text-black" />
      </button>
    );

  const customRenderIndicator = (
    onClickHandler: MouseEventHandler<HTMLButtonElement>,
    isSelected: boolean,
    index: number,
    label: string | undefined
  ) => {
    const dotClass = isSelected
      ? "custom-dot custom-dot-selected"
      : "custom-dot";
    return (
      <li
        className={dotClass}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <div className="bg-[#E1F6DE]">
      <section className="xl:w-[90%] w-[100vw] m-auto px-4 md:px-6 my-8">
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showThumbs={true}
          autoPlay={true}
          interval={5000}
          renderArrowPrev={customRenderArrowPrev}
          renderArrowNext={customRenderArrowNext}
          renderIndicator={customRenderIndicator}
        >
     
          <section>
            <div className="h-[300px] m-auto flex justify-center items-center flex-col my-4 ">
              <div className="m-auto flex justify-center items-center gap-x-2 w-fit my-6">
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
              </div>
              <div>
              <p className="text-center text-black text-base font-bold font-jakarta leading-[125%] px-1 lg:max-w-[700px] my-4">
                  "Love the simple set up of the materials. I practiced this at
                  home, I can’t wait to take it to the ED to practice, and share
                  with residents. Good fidelity of the model, with balance of
                  easily repeating."
                </p>
              </div>
              <div className="my-6 flex justify-center items-center gap-x-4">
                <img
                  src={jason}
                  className="max-w-10 h-10 border-4 border-cGreen rounded-[50px]"
                  alt="Client"
                />
                <p className="flex flex-col justify-center items-center leading-[110%] font-jakarta">
                  <span className="text-zinc-900 font-bold">Jeff H</span>
                  <span>Dentist</span>
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="h-[300px] m-auto flex justify-center items-center flex-col my-4">
              <div className="m-auto flex justify-center items-center gap-x-2 w-fit my-6">
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
                <Star className="w-5 h-5 text-black m-auto" />
              </div>
              <div>
              <p className="text-center text-black text-base font-bold font-jakarta leading-[125%] px-1 lg:max-w-[700px] my-4">
                  "Love the simple set up of the materials. I practiced this at
                  home, I can’t wait to take it to the ED to practice, and share
                  with residents. Good fidelity of the model, with balance of
                  easily repeating."
                </p>
              </div>
              <div className="my-6 flex justify-center items-center gap-x-4">
                <img
                  src={jason}
                  className="max-w-10 h-10 border-4 border-cGreen rounded-[50px]"
                  alt="Client"
                />
                <p className="flex flex-col justify-center items-center leading-[110%] font-jakarta">
                  <span className="text-zinc-900 font-bold">Jeff H</span>
                  <span>Dentist</span>
                </p>
              </div>
            </div>
          </section>
        </Carousel>
      </section>
    </div>
  );
}

export default Testimonial;
