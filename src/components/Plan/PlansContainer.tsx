import { useState } from "preact/hooks";
import PlanCard from "./PlanCard";
export default function PlansContainer() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center desktop:mb-12 desktop:mt-32 mt-16 mb-9 tablet:mt-28 tablet:mb-10">
        <div
          className={`text-h2 text-[1.125rem] transition duration-300 ${
            !isYearly ? "text-opacity-100 " : "text-opacity-50 text-black"
          } `}
        >
          Monthly
        </div>
        <div className="rounded-full bg-light-grey p-1 flex justify-center items-center w-16 mx-8">
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={` rounded-full bg-black w-6 h-6 ${
              !isYearly ? "-translate-x-4" : "translate-x-4"
            } transition duration-300 `}
          ></button>
        </div>
        <div
          className={`text-h2 text-[1.125rem] transition duration-300 ${
            isYearly ? "text-opacity-100 " : "text-opacity-50 text-black"
          } `}
        >
          Yearly
        </div>
      </div>
      <div class="flex items-center justify-center desktop:flex-row flex-col desktop:px-40 tablet:px-10 px-8">
        <PlanCard
          isYearly={isYearly}
          description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          price={19}
          title="Basic"
        />
        <PlanCard
          isYearly={isYearly}
          description={`More advanced features available. Recommended for photography veterans and professionals.`}
          price={39}
          title="Pro"
          isPro
          className="desktop:mx-8 my-6 desktop:my-0"
        />
        <PlanCard
          isYearly={isYearly}
          title="Business"
          price={99}
          description="Additional features available such as more detailed metrics. Recommended for business owners."
        />
      </div>
    </>
  );
}
