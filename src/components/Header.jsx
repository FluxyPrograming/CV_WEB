import { useState } from "react";
import { TextLogo } from "./Logo.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

export const Header = () => {
  const [style, setStyle] = useState("m-2 p-2 rounded-3xl bg-primary");

  return (
    <header className="fixed w-dvw z-10">
      <div className="p-2 bg-main-bg pl-[10px] flex">
        <a
          className="cursor-pointer"
          onClick={() => {
            gsap.to(window, {
              duration: 1.25,
              scrollTo: 0,
              ease: "power3",
            });
          }}
        >
          <TextLogo />
        </a>
        <div className="flex-grow"></div>
        <ul className="text-main-text content-center flex items-center mr-4">
          <li className=" m-2 h-fit">
            <a
              className="cursor-pointer"
              onClick={() => {
                gsap.to(window, {
                  duration: 1.25,
                  scrollTo: { y: "#myProfile", offsetY: 60 },
                  ease: "power3",
                });
              }}
            >
              About me
            </a>
          </li>
          <li className=" m-2">
            <a
              className="cursor-pointer"
              onClick={() => {
                gsap.to(window, {
                  duration: 1.25,
                  scrollTo: { y: "#technologies", offsetY: -20 },
                  ease: "power3",
                });
              }}
            >
              Technologies
            </a>
          </li>
          <li className=" m-2">
            <a
              className="cursor-pointer"
              onClick={() => {
                gsap.to(window, {
                  duration: 1.25,
                  scrollTo: { y: "#projects", offsetY: -20 },
                  ease: "power3",
                });
              }}
            >
              My projects
            </a>
          </li>
          <li id="contAnim" className={style}>
            <a
              className="m-2 cursor-pointer"
              onClick={() => {
                gsap.to(window, {
                  duration: 1.25,
                  scrollTo: { y: "#contact", offsetY: -20 },
                  ease: "power3",
                });
              }}
              onMouseOver={() => {
                gsap.to("#contAnim", {
                  duration: 0.35,
                  backgroundColor: "#61C0B3",
                  scale: 1.1,
                });
              }}
              onMouseLeave={() => {
                gsap.to("#contAnim", {
                  duration: 0.35,
                  backgroundColor: "#A4D0CA",
                  scale: 1,
                });
              }}
            >
              Reach me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
