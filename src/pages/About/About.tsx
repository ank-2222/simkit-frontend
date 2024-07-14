import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import Team from "./components/Team";

function About() {
  return (
    <div className="xl:w-[90%] w-[100vw] m-auto px-4 md:px-6">
      <Hero />
      <Team />
      <Footer />
    </div>
  );
}

export default About;
