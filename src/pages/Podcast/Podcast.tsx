import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import PodcastList from "./components/PodcastList";


function Podcast() {



  
  return (
    <div className="w-full overflow-hidden bg-[#F8FCF7]">
      <div className="xl:w-[90%] w-[100vw] m-auto px-4 md:px-6 mt-16 ">
        <Hero />

        <div className=" mt-[40px] lg:mt-[70px]">
          <PodcastList  />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Podcast;
