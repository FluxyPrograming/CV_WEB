import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnterAnimation } from "./EnterAnimation";
import { MyProfile } from "./MyProfile";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Body = () => {
  let sections = gsap.utils.toArray(".sect");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "labels",
    },
  });

  return (
    <>
      <section
        id="entrance"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col overflow-hidden sect"
      >
        <EnterAnimation />
      </section>
      <section
        id="myProfile"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col sect"
      >
        <MyProfile />
      </section>
      <section
        id="technologies"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col sect"
      >
        <Technologies />
      </section>
      <section
        id="projects"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col sect"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col sect"
      >
        <ContactMe />
      </section>
    </>
  );
};
