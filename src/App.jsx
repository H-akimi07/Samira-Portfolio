import SiteShell from "./components/layout/SiteShell";
import Navbar from "./components/navigation/Navbar";
import Hero from "./sections/Hero/Hero";
import Work from "./sections/Work/Work";
function App() {
  return (
    <SiteShell>
      <Navbar />

      <main>
        <Hero />

        <Work />

        <section id="lab" className="demo-section">
          <span>02 / LAB</span>
          <h2>What I explore.</h2>
        </section>

        <section id="journey" className="demo-section">
          <span>03 / JOURNEY</span>
          <h2>What I learn.</h2>
        </section>

        <section id="contact" className="demo-section">
          <span>04 / CONTACT</span>
          <h2>Let&apos;s connect.</h2>
        </section>
      </main>
    </SiteShell>
  );
}

export default App;
