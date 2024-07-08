import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface subscriptionTabProps {
  title: string;
  description: string;
  price?: number;
  pricetag?: string;
  features?: string[];
  CTAText: string;
}

function SubscriptionTab({
  title,
  description,
  price,
  pricetag,
  features,
  CTAText,
}: subscriptionTabProps) {
  return (
    <div>
      <div
        className={cn(
          title === "Annual subscription" ? "bg-[#047857]  border-0" : "bg-none  border-2",
          "font-jakarta w-[300px] min-h-[310px] group  border-zinc-300 rounded-[0.3rem] py-8 px-4 relative"
        )}
      >
        <p
          className={cn(
            title === "Annual subscription" ? "text-white" : "text-zinc-900",
            "  text-[1.4rem] font-bold  "
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            title === "Annual subscription" ? "text-white" : "text-slate-500",
            " text-[0.9rem] font-normal mt-[10px] "
          )}
        >
          {description}
        </p>
        {price && pricetag && (
          <p
            className={cn(
                title === "Annual subscription"
                ? "text-white"
                : "text-zinc-900",
              "text-[2.5rem] font-semibold mt-[20px]"
            )}
          >
            ${price}{" "}
            <span
              className={cn(
                title === "Annual subscription"
                  ? "text-white"
                  : "text-zinc-900",
                "text-base  "
              )}
            >
              /{pricetag}
            </span>
          </p>
        )}
        <button
          className={cn(
            title === "Annual subscription" ? " border-0 bg-white" : " border-2 border-emerald-700 bg-none",
            "text-center  text-base font-semibold w-full text-emerald-700  p-2 rounded-[0.4rem]  mt-6 ",
            title === "Group Plans" || title === "Resident and medical student discounts" ? "absolute w-[90%] bottom-8 " : "border-zinc-300"
          )}
        >
          {CTAText}
        </button>
        {features && (
          <div className="mt-10">
            {features?.map((feature, index) => {
              return (
                <p
                  key={index}
                  className={cn(
                    title === "Annual subscription"
                      ? "text-white"
                      : "text-zinc-900",
                    "  text-base font-medium flex justify-start items-center gap-x-4 "
                  )}
              
                >
                  <Check
                    className={cn(
                        title === "Annual subscription"
                        ? "text-emerald-700"
                        : "text-emerald-700",
                      "bg-[#D1FAE5] min-w-[30px] min-h-[30px] p-2 rounded-[50rem]"
                    )}
                  />
                  {feature}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SubscriptionTab;
