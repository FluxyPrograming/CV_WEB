import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { EnterAnimation } from "./EnterAnimation";
import { MyProfile } from "./MyProfile";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";

gsap.registerPlugin(useGSAP);

export const Body = () => {
  return (
    <>
      <section
        id="entrance"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col"
      >
        <EnterAnimation />
      </section>
      <section
        id="myProfile"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col"
      >
        <MyProfile />
      </section>
      <section
        id="technologies"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col"
      >
        <Technologies />
      </section>
      <section
        id="projects"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="bg-main-bg text-main-text min-h-dvh z-0 flex flex-col"
      >
        <ContactMe />
      </section>
    </>
  );
};
