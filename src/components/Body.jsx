import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { EnterAnimation } from "./EnterAnimation";
import { MyProfile } from "./MyProfile";
import { Technologies } from "./Technologies";

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
    </>
  );
};
