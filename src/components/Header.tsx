/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ShoppingBag, X } from "lucide-react";
import { motion } from "framer-motion";
import Medusa from "@medusajs/medusa-js";
const medusa = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  maxRetries: 3,
});

function Header() {
  const [show, setShow] = useState(false);
  const handleNavigation = () => {
    setShow(!show);
  };

  const isAuth: any = localStorage.getItem("token") || "";

  const handleLogout = () => {
    try {
      medusa.auth.deleteSession().then(() => {
        localStorage.removeItem("token");
        window.location.reload();
      });
    } catch (error: any) {
      console.error(error?.response?.data.message);
    }
  };

  const cart_id = localStorage.getItem("cart_id") || "";

  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    if (cart_id) {
      medusa.carts.retrieve(cart_id).then((res) => {
        const cart = res.cart;
        const totalQuantity = cart.items.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        setQuantity(totalQuantity);
      });
    }
  }, [cart_id]);

  return (
    <div>
      <nav className=" hidden  lg:flex flex-row justify-evenly items-center py-[24px] ">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[150px] h-[30px]  "></img>
        </Link>

        <div className=" mx-[80px] ">
          <ul className="text-zinc-900 lg:text-[0.9rem] xl:text-[1.1rem] font-medium font-jakarta leading-normal flex flex-row justify-center items-center lg:gap-x-6 xl:gap-x-12">
            <li>
              <Link to="/how">How it Works</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/">Podcasts</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center ">
          {isAuth ? (
            <a
              onClick={handleLogout}
              className="text-right text-zinc-900 lg:text-[0.9rem] xl:text-[1.1rem] font-medium font-jakarta leading-normal cursor-pointer "
            >
              Logout
            </a>
          ) : (
            <Link
              to="/auth"
              className="text-right text-zinc-900 lg:text-[0.9rem] xl:text-[1.1rem] font-medium font-jakarta leading-normal "
            >
              Login
            </Link>
          )}

          <Link to="/get-started">
            {" "}
            <div className="w-[124px] h-[45px] p-4 ml-[30px] bg-black rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-[9px] inline-flex">
                <div className="text-right text-white text-base font-bold font-jakarta leading-7">
                  Get Started
                </div>
              </div>
            </div>
          </Link>
          <Link to="/cart" className="pl-4 relative ">
            <ShoppingBag />
            <p className="absolute  -top-4 -right-2 bg-red-500 h-6 w-6 flex justify-center items-center rounded-xl text-white font-semibold ">
              {quantity}
            </p>
          </Link>
        </div>
      </nav>

      <motion.nav className="lg:hidden relative ">
        <div className="flex flex-row justify-between items-center py-[24px] px-[20px]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[150px] h-[30px]  "></img>
          </Link>
          <div className="flex justify-center items-center gap-x-4">
            {quantity > 0 && (
              <Link to="/cart" className="pl-4 relative ">
                <ShoppingBag />
                <p className="absolute  -top-4 -right-2 bg-red-500 h-6 w-6 flex justify-center items-center rounded-xl text-white font-semibold ">
                  {quantity}
                </p>
              </Link>
            )}

            <button
              onClick={handleNavigation}
              className="text-right text-zinc-900 text-[1.1rem] font-medium font-jakarta leading-normal "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          className={cn(
            show ? "left-0 fixed" : "left-[-1000px] absolute",
            "bg-white h-[100vh] w-[100vw]  top-0 z-[999] transition-all ease-in-out duration-500 overflow-hidden"
          )}
        >
          <div className="flex flex-row items-start justify-between p-4 py-8">
            <img src={logo} alt="logo" className="w-[150px] h-[30px]  "></img>

            <button
              onClick={handleNavigation}
              className="text-right text-zinc-900 text-[1.1rem] font-medium font-jakarta leading-normal "
            >
              {" "}
              <X size={40} />
            </button>
          </div>
          <ul className="text-zinc-900 text-[2rem] font-semibold font-['poppins'] leading-normal flex flex-col justify-start items-start gap-y-4 px-4 mt-[10px]   ">
            <li onClick={handleNavigation}>
              <Link to="/how">How it Works</Link>
            </li>
            <li onClick={handleNavigation}>
              <Link to="/">About us</Link>
            </li>
            <li onClick={handleNavigation}>
              <Link to="/billing">FAQs</Link>
            </li>
            <li onClick={handleNavigation}>
              <Link to="/cart">Podcasts</Link>
            </li>
            <li onClick={handleNavigation}>
              <Link to="/product">Products</Link>
            </li>
          </ul>

          <hr className="m-4 h-[2px]  bg-black " />

          <div className="flex flex-col justify-center items-start gap-x-12 mt-[50px]  ">
            {isAuth ? (
              <a
                onClick={handleLogout}
                className="text-right text-zinc-900 text-[2rem] font-semibold px-4 font-jakarta leading-normal cursor-pointer "
              >
                Logout
              </a>
            ) : (
              <Link
                to="/auth"
                className="text-right text-zinc-900 text-[2rem] font-semibold px-4 font-jakarta leading-normal "
              >
                Login
              </Link>
            )}

            <Link to="/get-started">
              {" "}
              <div
                onClick={handleNavigation}
                className="w-[150px] h-[45px]  m-4  bg-black rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex"
              >
                <div className="justify-center items-center gap-[9px] inline-flex">
                  <div className="text-right text-white text-[1.3rem] font-bold font-jakarta leading-7">
                    Get Started
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}

export default Header;
