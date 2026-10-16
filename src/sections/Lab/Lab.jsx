import {
  BrainCircuit,
  PanelsTopLeft,
  Network,
  Languages,
  ArrowUpRight,
} from "lucide-react";

import "../PortfolioSections.css";

const explorations = [
  {
    number: "01",
    title: "Applied AI",
    description:
      "Exploring how AI can support practical workflows, from meeting summaries to learning assistance.",
    status: "BUILDING & EXPLORING",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Interface Systems",
    description:
      "Studying how layout, interaction, accessibility, and visual hierarchy shape digital experiences.",
    status: "DESIGN & DEVELOPMENT",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Connected Systems",
    description:
      "Learning how APIs, application logic, data, and user interfaces work together.",
    status: "TECHNICAL EXPLORATION",
    icon: Network,
  },
  {
    number: "04",
    title: "Language & Communication",
    description:
      "Exploring multilingual interfaces and the role of technology in making communication easier.",
    status: "EXPERIMENTING",
    icon: Languages,
  },
];

function Lab() {
  return (
    <section id="lab" className="editorial-section lab-section">
      <div className="container-wide">
        <div className="lab-heading">
          <div className="editorial-heading">
            <span className="section-label">04 / THE LAB</span>

            <h2>
              Curiosity is
              <br />
              part of the <span>process.</span>
            </h2>

            <p>
              Beyond finished projects, I explore ideas, connect concepts, and
              look for better ways to use technology.
            </p>
          </div>

          <div className="lab-mark" aria-hidden="true">
            <div className="lab-mark__orbit lab-mark__orbit--one" />
            <div className="lab-mark__orbit lab-mark__orbit--two" />
            <div className="lab-mark__core">
              <span>SH</span>
            </div>
            <span className="lab-mark__point" />
          </div>
        </div>

        <div className="lab-list">
          {explorations.map((item) => {
            const Icon = item.icon;

            return (
              <article className="lab-item" key={item.number}>
                <span className="lab-item__number">{item.number}</span>

                <div className="lab-item__icon">
                  <Icon size={23} strokeWidth={1.5} />
                </div>

                <div className="lab-item__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="lab-item__status">{item.status}</span>

                <ArrowUpRight
                  className="lab-item__arrow"
                  size={19}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        <p className="lab-footnote">
          A space for ongoing learning. Not every exploration needs to become a
          finished product.
        </p>
      </div>
    </section>
  );
}

export default Lab;
