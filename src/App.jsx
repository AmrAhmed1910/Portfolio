import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import CONTACT from "./components/Contact";
import Dreams from "./components/Dreams";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };
  return (
        <div>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="bg-scroll absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#740093_130%)] "></div>
      </div>
    {showWelcome ? (
      <Welcome onComplete={handleWelcomeComplete} />
    ) : (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-950 ">
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Dreams />
        <CONTACT />
      </div>
    </div> )}
    </div>
  );
};

export default App;
