import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Body = () => {
  return (
    <>
      <section className="bg-main-bg text-main-text min-h-dvh z-0">
        <div id="" className="m-auto bg-primary h-20 w-3/5 rounded-xl"></div>
        <article>
          <h1 className="text-primary text-8xl m-auto w-fit text-6xl font-medium font-general">
            - MY PROFILE -
          </h1>
        </article>
      </section>
    </>
  );
};
