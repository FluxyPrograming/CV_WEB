import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const EnterAnimation = () => {
  let tl = gsap.timeline();

  tl.to("#enter", {
    scale: 1.8,
    duration: 1,
  });
  tl.to("#enter", {});

  return (
    <>
      <div id="enter" className="m-auto font-general font-bold text-6xl">
        <p className="block">HI, I'M LUKA</p>
        <p className="block text-main-bg">HI, I'M LUKA</p>
        <p className="block">HI, I'M LUKA</p>
      </div>
    </>
  );
};
