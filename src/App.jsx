import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteShell from "./components/layout/SiteShell";
import Navbar from "./components/navigation/Navbar";

import Hero from "./sections/Hero/Hero";
import Work from "./sections/Work/Work";

import ProjectPage from "./pages/Project/ProjectPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Work />

      <section id="lab" className="demo-section">
        <span>03 / LAB</span>
        <h2>What I explore.</h2>
      </section>

      <section id="journey" className="demo-section">
        <span>04 / JOURNEY</span>
        <h2>What I learn.</h2>
      </section>

      <section id="contact" className="demo-section">
        <span>05 / CONTACT</span>
        <h2>Let&apos;s connect.</h2>
      </section>
    </>
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
