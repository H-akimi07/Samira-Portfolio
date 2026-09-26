import SiteShell from "./components/layout/SiteShell";

function App() {
  return (
    <SiteShell>
      <main>
        <section className="foundation-screen">
          <div className="container">
            <span className="foundation-label">
              SAMIRA HAKIMI / DIGITAL LAB
            </span>

            <h1>
              Building digital
              <br />
              systems.
            </h1>

            <p>
              A personal technology portfolio for what I build, learn, and
              explore.
            </p>

            <div className="foundation-signal">
              <span />
              FOUNDATION / 01
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export default App;
