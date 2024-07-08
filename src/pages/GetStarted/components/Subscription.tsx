import SubscriptionTab from "./SubscriptionTab";
import {motion} from "framer-motion";
const subscriptionData = [
  {
    title: "Monthly Subscription",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 75,
    priceTag: "month",
    CTAText: "Subscribe",
    features: [
        "12 months of interactive learning and continuing medical education",
        "Monthly box delivery of a simulation model and supplies",
        "Email reminders to complete your learning",
        "Point-of-care study aids to remind you of critical steps",
        "Point-of-care study aids to remind you of critical steps",
        "Full access to our Regional Anesthesia Library"

    ]
  },
  {
    title: "Annual subscription",
    description:
      "Ideal for individuals who who need advanced features and tool for client work.",
    price: 900,
    priceTag: "year",
    CTAText: "Subscribe",
    features: [
        "12 months of interactive learning and continuing medical education",
        "Monthly box delivery of a simulation model and supplies",
        "Email reminders to complete your learning",
        "Point-of-care study aids to remind you of critical steps",
        "Point-of-care study aids to remind you of critical steps",
        "Full access to our Regional Anesthesia Library"
    ]
  },
  {
    title: "Group Plans",
    description:
      "Ideal for individuals who who need advanced features and tools for client work.",
  
    CTAText: "Get Started Now",

  },
  {
    title: "Resident and medical student discounts",
    description:
      "If you are a learner, you qualify for a significant discount: 40% for residents and 50% for medical students! Contact us to discuss rates for your institution.",

    CTAText: "Get Started Now",
  },
];

function Subscription() {
  return (
    <div>
      <section className="mt-[80px] py-16  lg:p-[50px] w-[100%] xl:w-[95%]   m-auto  flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-start items-start xl:max-w-[95%] gap-y-4 px-4 lg:px-0">
          <p className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">
            Get Started
          </p>
          <h1 className="text-black lg:text-5xl text-[2.5rem] font-bold font-jakarta  leading-[110%]">
            Remember SimKit qualifies for your CME allotment!
          </h1>
          <p className=" text-black text-base font-normal font-jakarta  leading-normal mt-[10px] ">
            Your physical + digital subscription includes exclusive printed
            content delivered to your door, full digital access on all devices,
            bonus online features, and members-only perks and discounts.
          </p>
        </div>

        <div className="flex flex-row justify-start items-start  lg:max-w-[95%]  gap-x-6 w-[100vw] overflow-scroll px-[30px] lg:px-0 mt-10">
          {subscriptionData?.map((item, index) => {
            return (
              <motion.div 
              animate={{ y: 0, opacity: 1 }}    
                initial={{ y: 400, opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              key={index}>
                <SubscriptionTab
                  title={item.title}
                  description={item.description}
                  CTAText={item.CTAText}
                    price={item.price}
                    pricetag={item.priceTag}
                    features={item.features}
                />
            
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Subscription;
