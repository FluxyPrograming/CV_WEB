import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Body = () => {
  return (
    <>
      <section className="bg-main-bg text-main-text min-h-dvh z-0">
        <div className="h-20"></div>
        <div className="m-auto bg-primary h-20 w-3/5 rounded-xl translate-y-32 scale-y-150"></div>
      </section>
    </>
  );
};
