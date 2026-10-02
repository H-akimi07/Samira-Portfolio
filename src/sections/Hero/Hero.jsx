import ThreeScene from "../../three/ThreeScene";
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
            <p className="hero__label">SAMIRA HAKIMI / DEVELOPER</p>

            <h1>
              Building
              <span> digital systems.</span>
            </h1>

            <p className="hero__description">
              Exploring web development, intelligent applications, and the ideas
              that shape what comes next.
            </p>

            <div className="hero__actions">
              <a href="#work" className="hero__button">
                Explore work
                <span>↗</span>
              </a>

              <a href="#lab" className="hero__secondary">
                Enter the lab
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-label hero__visual-label--top">
              LAB CORE / 001
            </div>

            <div className="hero__canvas">
              <ThreeScene />
            </div>

            <div className="hero__visual-label hero__visual-label--bottom">
              <span>BUILD</span>
              <span>THINK</span>
              <span>EXPLORE</span>
            </div>
          </div>
        </div>

        <div className="hero__footer">
          <span>WEB / AI / SYSTEMS</span>

          <span className="hero__coordinate">34° 21′ / 62° 11′</span>

          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
