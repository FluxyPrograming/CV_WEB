import { TextLogo } from "./Logo.jsx";

export const Header = () => {
  return (
    <header className="">
      <div className="p-2 bg-main-bg flex">
        <TextLogo />
        <div className="gap-10"></div>
        <ul className="text-main-text content-center">
          <li className="inline-block p-2">About me</li>
          <li className="inline-block p-2">Experience</li>
          <li className="inline-block p-2">My projects</li>
          <li className="inline-block p-2">Reach me</li>
        </ul>
      </div>
    </header>
  );
};
