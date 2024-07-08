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
    <div>
      <div className="lg:max-w-[90%] w-full px-4 lg:px-0  m-auto mt-[100px] ">
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
                  <Link to="/">How it works</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Podcasts </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-cGreen text-lg font-bold font-jakarta leading-normal mb-4">
                Other Links
              </h1>
              <ul className="text-zinc-400 text-lg font-medium font-['Plus Jakarta Sans'] leading-normal flex flex-col gap-y-2">
                <li>
                  <Link to="/">Get started</Link>
                </li>
                <li>
                  <Link to="/">customers</Link>
                </li>
                <li>
                  <Link to="/">contact us</Link>
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
                  <Link to="/">Our services</Link>
                </li>
                <li>
                  <Link to="/">Pricing </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="flex flex-row justify-start items-end gap-x-4 mt-[50px] mb-[50px] lg:mb-[90px] ">
          <a>
            <FaInstagram
              size={40}
              className="text-white p-1 bg-cGreen rounded-[0.4rem]  "
            />
          </a>
          <a>
            <FaLinkedin
              size={36}
              className="text-white p-[5px] bg-cGreen rounded-[50rem]  "
            />
          </a>
          <a>
            <FaFacebook
              size={36}
              className="text-white p-[5px] bg-cGreen rounded-[50rem] "
            />
          </a>
          <a>
            <FaTwitter
              size={36}
              className="text-white p-[5px] bg-cGreen rounded-[50rem]  "
            />
          </a>
          <a>
            <FaYoutube
              size={36}
              className="text-white p-[5px] bg-cGreen rounded-[50rem] "
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
