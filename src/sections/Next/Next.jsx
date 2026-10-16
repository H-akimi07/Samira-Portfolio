import { ArrowDownRight, Compass, Sparkles } from "lucide-react";

import "../PortfolioSections.css";

const directions = [
  "Deepen my understanding of computer science.",
  "Build more reliable, thoughtful web applications.",
  "Explore practical AI integration and intelligent systems.",
];

function Next() {
  return (
    <section id="next" className="editorial-section next-section">
      <div className="container-wide">
        <div className="next-layout">
          <div className="next-copy">
            <span className="section-label">07 / WHAT COMES NEXT</span>

            <h2>
              The work is
              <br />
              <span>still unfolding.</span>
            </h2>

            <p>
              I'm building on my web development experience while working toward
              deeper study in computer science and exploring how intelligent
              technology can solve practical problems.
            </p>

            <div className="next-directions">
              {directions.map((direction, index) => (
                <div className="next-direction" key={direction}>
                  <span>0{index + 1}</span>
                  <p>{direction}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="next-visual"
            aria-label="A symbol of ongoing exploration"
          >
            <div className="next-visual__orbit next-visual__orbit--outer" />
            <div className="next-visual__orbit next-visual__orbit--middle" />
            <div className="next-visual__orbit next-visual__orbit--inner" />

            <div className="next-visual__core">
              <Compass size={34} strokeWidth={1.2} />
            </div>

            <Sparkles className="next-visual__spark" size={21} />
            <ArrowDownRight className="next-visual__arrow" size={27} />

            <span className="next-visual__label">DIRECTION / OPEN</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Next;
