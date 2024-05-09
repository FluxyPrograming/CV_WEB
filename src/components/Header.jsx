import { useState } from "react";
import { TextLogo } from "./Logo.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export const Header = () => {
  const [style, setStyle] = useState("m-2 p-2 rounded-3xl bg-primary");

  return (
    <header className="fixed w-dvw z-10">
      <div className="p-2 bg-main-bg flex">
        <TextLogo />
        <div className="flex-grow"></div>
        <ul className="text-main-text content-center flex items-center mr-4">
          <li className=" m-2 h-fit">
            <a href="">About me</a>
          </li>
          <li className=" m-2">
            <a href="">Experience</a>
          </li>
          <li className=" m-2">
            <a href="">My projects</a>
          </li>
          <li
            id="contact"
            className={style}
            onMouseOver={() => {
              gsap.to("#contact", {
                duration: 0.35,
                backgroundColor: "#61C0B3",
                scale: 1.1,
              });
            }}
            onMouseLeave={() => {
              gsap.to("#contact", {
                duration: 0.35,
                backgroundColor: "#A4D0CA",
                scale: 1,
              });
            }}
          >
            <a href="" className="m-2">
              Reach me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
