import Button from "./Button";

type Props = {
  isPro?: boolean;
  className?: string;
  title: string;
  description: string;
  price: number;
  isYearly?: boolean;
};
// const { isPro, className, title, description, price, isYearly } = Astro.props;

export default function PlanCard({
  isPro,
  className,
  title,
  description,
  price,
  isYearly,
}: Props) {
  return (
    <div
      style={{
        borderImage:
          "linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%) 145",
      }}
      class={` px-8 text-center ${
        isPro
          ? "bg-black text-white border-t-[6px] pt-20 pb-16  tablet:border-t-0 tablet:border-l-[6px] desktop:border-l-0 desktop:border-t-[6px]"
          : "bg-light-grey text-black pt-14 pb-10"
      } ${className} `}
    >
      <div class="tablet:flex tablet:justify-between tablet:items-start tablet:text-left desktop:text-center desktop:block">
        <div class="pb-10 tablet:w-[43%] desktop:w-full">
          <h4 class="text-h2">{title}</h4>
          <p class="text-body opacity-60 pt-4">{description}</p>
        </div>
        <div class="pb-10 tablet:text-right desktop:text-center">
          <h4 class="text-h1">${(isYearly ? price * 10 : price).toFixed(2)}</h4>
          <p class="text-body opacity-60">
            {isYearly ? "per year" : "per month"}
          </p>
        </div>
      </div>
      <Button
        customClass={`w-full block tablet:w-[43%] desktop:w-full ${
          isPro ? "py-3" : ""
        } `}
        isDark={!isPro}
      >
        pick plan
      </Button>
    </div>
  );
}
