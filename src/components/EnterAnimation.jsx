import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useIntersection } from "../hooks/useIntersection";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP);

const enterAnimation = () => {
  const t1 = gsap.timeline({ repeat: 0 });
  t1.to("#enter", { scaleY: 4 });
};

export const EnterAnimation = () => {
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  useEffect(() => {
    if (isVisible) {
      enterAnimation();
    }
  }, [enterAnimation, isVisible]);
  return (
    <>
      <div
        ref={triggerRef}
        id="enter"
        className="m-auto bg-primary h-40 w-3/5 rounded-xl"
      ></div>
    </>
  );
};
