import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const EnterAnimation = () => {
  let tl = gsap.timeline();

  tl.to("#enter", {
    scale: 1.8,
    duration: 1.5,
  }).to(".tt", {
    scale: 1.4,
    duration: 1.2,
  });

  return (
    <>
      <div id="enter" className="m-auto font-general font-bold text-6xl">
        <img
          src="src\assets\low-poly-grid-haikei.svg"
          alt=""
          className="bg absolute  h-[600px] w-[500px] top-[-10%] left-[5%] z-[-1]"
        />
        <p className="tt block z-10 m-[20px]">Hi, I'm Luka</p>
        <p
          className="tt block z-10 m-[20px] text-[transparent]"
          style={{ WebkitTextStroke: "2px white" }}
        >
          Hi, I'm Luka
        </p>
        <p className="tt block z-10 m-[20px]">Hi, I'm Luka</p>
      </div>
    </>
  );
};
