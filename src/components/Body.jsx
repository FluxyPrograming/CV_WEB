import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Body = () => {
  return (
    <>
      <section className="bg-main-bg text-main-text">
        <p>Hello, World!</p>
      </section>
    </>
  );
};
