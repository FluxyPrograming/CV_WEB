import { TextLogo } from "./Logo.jsx";

export const Header = () => {
  return (
    <header className="">
      <div className="p-2 bg-main-bg flex border-b-2 border-b-main-text border-opacity-20">
        <TextLogo />
        <div className="flex-grow"></div>
        <ul className="text-main-text content-center flex justify-center align-middle text-center">
          <li className=" p-2">
            <a href="">About me</a>
          </li>
          <li className=" p-2">
            <a href="">Experience</a>
          </li>
          <li className=" p-2">
            <a href="">My projects</a>
          </li>
          <li className=" p-2">
            <a href="">Reach me</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
