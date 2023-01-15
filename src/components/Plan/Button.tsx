import type { ComponentChildren } from "preact";

interface Props {
  isGhost?: boolean;
  isDark?: boolean;
  customClass?: string;
  children: ComponentChildren;
}

export default function Button({
  isGhost,
  isDark,
  customClass,
  children,
}: Props) {
  function getClass(): string {
    if (isGhost) {
      if (isDark) return "text-white hover:underline";
      else return "text-black hover:underline";
    } else {
      let className = "hover:bg-light-grey hover:text-black ";
      if (isDark) return className + "text-white bg-black";
      else return className + "text-black bg-white";
    }
  }
  return (
    <button
      onClick={() => console.log("selected plan")}
      class={
        getClass() +
        " font-bold text-[0.75rem] leading-[0.97625rem] tracking-[2px] py-3 px-6 uppercase transition duration-300 " +
        customClass
      }
    >
      {children}
    </button>
  );
}
