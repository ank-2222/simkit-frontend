import Footer from "@/components/Footer";
import FaqAccordian from "./components/FaqAccordian";
import faq from "@/Data/faq.json";
function Faq() {
  return (
    <div>
      <section className="max-w-[100vw] px-4 mt-[30px] ">
        <div className="flex flex-col gap-y-2 justify-start items-start lg:mx-8 xl:mx-[100px]  ">
          {" "}
          <p className=" text-gray-900 text-base font-normal font-jakarta uppercase leading-normal tracking-tight">
            FAQs
          </p>
          <h1 className=" text-gray-900 text-[2.5rem] font-bold font-jakarta  leading-[110%] mt-[10px]  ">
            Frequently Asked Questions
          </h1>
          <p className=" text-gray-900 text-base font-normal font-jakarta  leading-[28.80px]">
            The body text should clarify your main intention. Why should people
            care about your product? Use this space to clarify your product
            offering.{" "}
          </p>
        </div>
      </section>

      <section className="max-w-[100vw] px-4 mt-[50px]  lg:mx-8 xl:mx-[100px] ">
        <FaqAccordian faq={faq} />
      </section>

      <Footer />
    </div>
  );
}

export default Faq;
