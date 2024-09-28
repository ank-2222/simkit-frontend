import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Homeskill from "./Components/Homeskill";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="max-w-[100vw] mt-16  overflow-hidden ">
       {/* <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://paleshockhands.mylearndash.com/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Embedded Page"
      />
    </div> */}
      <Hero />
      <Homeskill />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
