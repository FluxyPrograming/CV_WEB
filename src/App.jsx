import { ReactLenis, useLenis } from "lenis/react";
import { Header } from "./components/Header.jsx";
import { Body } from "./components/Body.jsx";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <Header />
      <Body />
    </ReactLenis>
  );
}

export default App;
