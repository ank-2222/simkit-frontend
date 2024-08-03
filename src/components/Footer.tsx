import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-[#F6FBF4]">
      <div className="lg:max-w-[90%] w-full px-4 lg:px-0 m-auto pt-[100px] ">
        <section className="flex lg:flex-row flex-col justify-between items-start lg:gap-x-[60px] xl:gap-x-[100px] ">
          <div className="xl:w-[500px] lg:w-[400px] w-full  ">
            <img src={logo} alt="logo" className="w-[122px] h-[30px]" />

            <p className=" text-zinc-400 text-[1rem] font-medium font-['Gilroy'] leading-normal mt-[20px] ">
              SimKit is a medical education company focused on delivering
              procedural training to clinicians. SimKit helps Emergency Medicine
              clinicians gain confidence in their procedural skills.
              <br></br>
              Our convenient 12-month curriculum arrives monthly at your door to
              give you the digital learning and hands-on experience you need to
              fight skill decay.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col flex-wrap gap-y-8 justify-center items-start lg:gap-x-[40px] xl:gap-x-[60px] mt-[30px] lg:mt-0">
            <div>
              <h1 className="text-cGreen text-lg font-bold font-jakarta leading-normal mb-4">
                Links
              </h1>
              <ul className="text-zinc-400 text-lg font-medium font-['Plus Jakarta Sans'] leading-normal flex flex-col gap-y-2">
                <li>
                  <Link to="/how-it-works">How it works</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/podcast">Podcasts </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-cGreen text-lg font-bold font-jakarta leading-normal mb-4">
                Other Links
              </h1>
              <ul className="text-zinc-400 text-lg font-medium font-['Plus Jakarta Sans'] leading-normal flex flex-col gap-y-2">
                <li>
                  <Link to="/get-started">Get started</Link>
                </li>
                <li>
                  <Link to="/">customers</Link>
                </li>
                <li>
                  <Link to="/contact">contact us</Link>
                </li>
                <li>
                  <Link to="/">Reviews</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-cGreen text-lg font-bold font-jakarta leading-normal mb-4">
                Documentations
              </h1>
              <ul className="text-zinc-400 text-lg font-medium font-['Plus Jakarta Sans'] leading-normal flex flex-col gap-y-2">
                <li>
                  <Link to="/">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy policy</Link>
                </li>
                <li>
                  <Link to="/product">Our services</Link>
                </li>
                <li>
                  <Link to="/get-started">Pricing </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="flex flex-row justify-start items-end gap-x-4 mt-[50px] pb-[50px] lg:pb-[90px] ">
          <a>
            <FaInstagram
              size={36}
                    className="text-cGreen p-[5px] bg-white rounded-[50rem] hover:p-[0.25rem] hover:rounded-[0.4rem]  hover:scale-110 transition-all duration-100 ease-in-out hover:text-white hover:bg-cGreen "
            />
          </a>
          <a>
            <FaLinkedin
              size={36}
                  className="text-cGreen p-[5px] bg-white rounded-[50rem] hover:p-[0.25rem] hover:rounded-[0.4rem]  hover:scale-110 transition-all duration-100 ease-in-out hover:text-white hover:bg-cGreen "
            />
          </a>
          <a>
            <FaFacebook
              size={36}
                 className="text-cGreen p-[5px] bg-white rounded-[50rem] hover:p-[0.25rem] hover:rounded-[0.4rem]  hover:scale-110 transition-all duration-100 ease-in-out hover:text-white hover:bg-cGreen "
            />
          </a>
          <a>
            <FaTwitter
              size={36}
                  className="text-cGreen p-[5px] bg-white rounded-[50rem] hover:p-[0.25rem] hover:rounded-[0.4rem]  hover:scale-110 transition-all duration-100 ease-in-out hover:text-white hover:bg-cGreen "
            />
          </a>
          <a>
            <FaYoutube
              size={36}
                    className="text-cGreen p-[5px] bg-white rounded-[50rem] hover:p-[0.25rem] hover:rounded-[0.4rem]  hover:scale-110 transition-all duration-100 ease-in-out hover:text-white hover:bg-cGreen "
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
