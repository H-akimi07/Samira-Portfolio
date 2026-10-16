import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteShell from "./components/layout/SiteShell";
import Navbar from "./components/navigation/Navbar";

import Hero from "./sections/Hero/Hero";
import Work from "./sections/Work/Work";
import HowIBuild from "./sections/HowIBuild/HowIBuild";
import Lab from "./sections/Lab/Lab";
import Journey from "./sections/Journey/Journey";
import Skills from "./sections/Skills/Skills";
import Next from "./sections/Next/Next";
import Contact from "./sections/Contact/Contact";

import ProjectPage from "./pages/Project/ProjectPage";

function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Work />
      <HowIBuild />
      <Lab />
      <Journey />
      <Skills />
      <Next />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteShell>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  );
}

export default App;
