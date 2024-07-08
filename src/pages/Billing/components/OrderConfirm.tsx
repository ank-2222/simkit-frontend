import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { BadgeCheckIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function OrderConfirm() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId: string = urlParams.get("order_id") || "";
 const navigate = useNavigate();
  useEffect(()=>{

    if(!orderId){
      window.location.href="/"
    }

    const timer = setTimeout(() => {
      navigate("/")
    }, 10000);
    return () => clearTimeout(timer);
     
  },[])


  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[80%] ">
        <DotLottieReact
          className="flex justify-center items-center w-[60%] h-[60%]"
          src="/images/orderConfirm.lottie"
          loop
          autoplay
        />
        <h1 className=" text-center text-black text-5xl font-bold flex justify-center items-center gap-x-2 font-jakarta leading-[125%]">
          Order Confirmed <BadgeCheckIcon className="text-cGreen" size={40} />{" "}
        </h1>{
          orderId&&(

            <p className="font-jakarta font-bold text-[1.2rem]  ">order Id:
            <span className="text-cGreen">
            {orderId}
            </span>
            </p>
          )
        }
      </div>
    </div>
  );
}

export default OrderConfirm;
