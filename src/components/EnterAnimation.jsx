import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const EnterAnimation = () => {
  let t1 = gsap.timeline({
    scrollTrigger: { trigger: "#enter", start: "top top", end: "+=500" },
  });

  return (
    <>
      <div id="enter" className="m-auto bg-primary h-40 w-3/5 rounded-xl"></div>
    </>
  );
};
