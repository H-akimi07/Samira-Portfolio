import { Lightbulb, Workflow, Code2, FlaskConical } from "lucide-react";

import "../PortfolioSections.css";

const principles = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the problem, the people experiencing it, and what a useful solution should achieve.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Break a complex idea into smaller parts, define the workflow, and plan how those parts connect.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the plan into an interface and connect the functionality needed to make it work.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Test the experience, investigate problems, and improve the solution through iteration.",
    icon: FlaskConical,
  },
];

function HowIBuild() {
  return (
    <section id="how-i-build" className="editorial-section process-section">
      <div className="container-wide">
        <div className="editorial-heading">
          <span className="section-label">03 / HOW I BUILD</span>

          <h2>
            From a question
            <br />
            to a <span>working system.</span>
          </h2>

          <p>
            I approach development as a process of understanding, structuring,
            building, and learning—not simply writing code.
          </p>
        </div>

        <div className="process-grid">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article className="process-item" key={item.number}>
                <div className="process-item__top">
                  <span>{item.number}</span>
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="process-note">
          <span className="process-note__line" />
          <p>
            Every project is an opportunity to turn a concept into something
            useful—and understand the system behind it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowIBuild;
