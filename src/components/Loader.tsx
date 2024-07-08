import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <DotLottieReact
        className="flex justify-center items-center w-[60%] h-[60%]"
        src="/images/loader.lottie"
        loop
        autoplay
      />
    </div>
  );
}

export default Loader;
