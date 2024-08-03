import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import Information from "./components/Information";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HowItWorks() {
  return (
    <div className="mt-16 ">
      <Hero />
      <Information/>
      <Footer/>
    </div>
  );
}

export default HowItWorks;
