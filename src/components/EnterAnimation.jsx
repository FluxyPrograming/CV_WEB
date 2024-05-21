import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const enterAnimation = () => {
  const t1 = gsap.timeline({ repeat: 0 });
  t1.to("#enter", { scaleY: 4 });
};

export const EnterAnimation = () => {
  return (
    <>
      <div id="enter" className="m-auto bg-primary h-40 w-3/5 rounded-xl"></div>
    </>
  );
};
