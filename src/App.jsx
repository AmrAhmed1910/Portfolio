import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import CONTACT from "./components/Contact";
import Dreams from "./components/Dreams";
import { useState } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-950">
    <div className="fixed absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #740093 130%)' }}>
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
        <SpeedInsights />
      </div>
    </div> )}
    </div>
  );
};

export default App;
