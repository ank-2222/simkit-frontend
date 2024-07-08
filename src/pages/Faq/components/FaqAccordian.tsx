/* eslint-disable @typescript-eslint/no-explicit-any */
interface faqType {
  id: number;
  title: string;
  description: string;
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqAccordian({ faq }: any) {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value={`item-1000`}>
          <AccordionTrigger className=" text-gray-900 text-lg font-semibold  leading-[28.80px] font-jakarta text-[1.1rem] text-left  ">
            Can I get Continuing Medical Education credits?
          </AccordionTrigger>
          <AccordionContent className="text-gray-900 text-base font-normal font-jakarta leading-relaxed ">
            Yes! We want you to get the most out of your subscription. Not only
            does this include stellar education, but also credit for the work
            you put in. The SimKit Annual subscription is accredited for AMA PRA
            Category 1 Credits™
            <a
              href="https://drive.google.com/file/d/1TVWZt1d8R2ng8_lRUxz1IH7-XKPqaECD/view?pli=1"
              target="_blank"
              className="text-blue-500 font-semibold"
            >
              {" "}
              See accreditation information here.
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={`item-1001`}>
          <AccordionTrigger className=" text-gray-900 text-lg font-semibold  leading-[28.80px] font-jakarta text-[1.1rem] text-left  ">
            What procedures are included in this training?
          </AccordionTrigger>
          <AccordionContent className="text-gray-900 text-base font-normal font-jakarta leading-relaxed ">
            SimKit subscription boxes focus our medical procedural training on
            the most time-sensitive or stress-inducing procedures medical
            professionals have to perform. This includes: <br />
            • Cricothyrotomy
            <br />
            • Gastroesophageal balloon tamponade
            <br />
            • Chest tube placement
            <br />
            • Lateral canthotomy
            <br />
            <br />
            Our lessons are based on the concept of spaced repetition to build
            muscle memory and procedural confidence. Every three months you’ll
            return to a procedure, with increasing complexity and fidelity each
            time. <br />
            <br />
            The first box for a procedure contains the lowest fidelity training
            materials. As you progress with a procedure, each subsequent box
            evolves in complexity, adding tactile elements in addition to visual
            elements. In this way, you will be confident in the foundational
            elements of a procedure before adding more information. <br />
            <br />
            But there’s more to come! SimKit is actively developing modules and
            training in many other procedures which will be added to the
            curriculum as they finalize.
          </AccordionContent>
        </AccordionItem>

        {faq?.map((item: faqType, index: any) => {
          return (
            <div key={index}>
              <AccordionItem value={`item-${item?.id}`}>
                <AccordionTrigger className=" text-gray-900 text-lg  leading-[28.80px] font-jakarta text-[1.1rem] text-left  font-semibold">
                  {item?.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-900 text-base font-normal font-jakarta leading-relaxed ">
                  {item?.description}
                </AccordionContent>
              </AccordionItem>
            </div>
          );
        })}
        <AccordionItem value={`item-1002`}>
          <AccordionTrigger className=" text-gray-900 text-lg font-semibold  leading-[28.80px] font-jakarta text-[1.1rem] text-left  ">
            How can I contact SimKit?
          </AccordionTrigger>
          <AccordionContent className="text-gray-900 text-base font-normal font-jakarta leading-relaxed ">
            SimKit wants to be here for you. That is why we include feedback
            options in your box or you can reach out via our customer support
            form at any time. Additionally, you can reach Dr. Hine, the founder,
            at
            <a
              href="mailto:Jason.Hine@simkit.com"
              target="_blank"
              className="text-blue-500 font-semibold"
            >
              {" "}
              Jason.Hine@simkit.com.
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FaqAccordian;
