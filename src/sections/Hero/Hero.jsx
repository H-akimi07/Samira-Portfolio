// import ThreeScene from "../../three/ThreeScene";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" />

      <div className="hero__content container">
        <div className="hero__eyebrow">
          <span>01</span>
          <span className="hero__signal" />
          <span>DIGITAL LAB</span>
        </div>

        <div className="hero__main">
          <div className="hero__copy">
            <p className="hero__label">WEB DEVELOPER / AI ENTHUSIAST</p>

            <h1 className="hero__name">
              <span className="hero__first-name">Samira</span>
              <span className="hero__last-name">Hakimi</span>
            </h1>

            <p className="hero__tagline">
              BUILDING DIGITAL SYSTEMS
              <span>FOR A SMARTER TOMORROW.</span>
            </p>

            <p className="hero__description">
              I’m a web developer passionate about AI, problem-solving, and
              creating meaningful digital experiences.
            </p>

            <div className="hero__actions">
              <a href="#work" className="hero__button">
                <span>Explore my work</span>
                <span aria-hidden="true">→</span>
              </a>

              <a href="#contact" className="hero__secondary">
                About me
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-label hero__visual-label--top">
              SAMIRA HAKIMI / 001
            </div>

            <div className="hero__portrait-glow" />

            <div className="hero__portrait-ring hero__portrait-ring--outer" />
            <div className="hero__portrait-ring hero__portrait-ring--inner" />

            <img
              src="/images/samira-portrait.png"
              alt="Portrait of Samira Hakimi"
              className="hero__portrait"
            />

            <div className="hero__visual-label hero__visual-label--bottom">
              <span>BUILD</span>
              <span>THINK</span>
              <span>EXPLORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
