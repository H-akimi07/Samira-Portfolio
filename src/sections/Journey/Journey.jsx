import { BookOpen, Code2, Layers3, Compass } from "lucide-react";

import "../PortfolioSections.css";

const milestones = [
  {
    number: "01",
    period: "THE BEGINNING",
    title: "Discovering Computer Science",
    description:
      "My understanding of technology developed gradually. Independent learning helped me move from basic computer knowledge toward web development and a deeper interest in how software works.",
    icon: BookOpen,
  },
  {
    number: "02",
    period: "INDEPENDENT LEARNING",
    title: "Learning by building",
    description:
      "Through self-study and practical exercises, I explored web development and began turning concepts into interactive digital experiences.",
    icon: Code2,
  },
  {
    number: "03",
    period: "APR — AUG 2026",
    title: "Developing through CodeWeekend",
    description:
      "I strengthened my web development skills through structured learning, collaboration, and project-based practice.",
    icon: Layers3,
  },
  {
    number: "04",
    period: "WHAT COMES NEXT",
    title: "Exploring intelligent technology",
    description:
      "I am continuing to grow as a developer while exploring AI integration and preparing for further study and opportunities in computer science.",
    icon: Compass,
  },
];

function Journey() {
  return (
    <section id="journey" className="editorial-section journey-section">
      <div className="container-wide">
        <div className="editorial-heading">
          <span className="section-label">05 / THE JOURNEY</span>

          <h2>
            Still learning.
            <br />
            <span>Still becoming.</span>
          </h2>

          <p>
            My path has not been a straight line. Each stage has shaped the
            questions I ask, the skills I develop, and the work I want to do
            next.
          </p>
        </div>

        <div className="journey-timeline">
          {milestones.map((item) => {
            const Icon = item.icon;

            return (
              <article className="journey-item" key={item.number}>
                <div className="journey-item__marker">
                  <span>{item.number}</span>
                  <div className="journey-item__line" />
                </div>

                <div className="journey-item__body">
                  <div className="journey-item__meta">
                    <Icon size={17} strokeWidth={1.6} />
                    <span>{item.period}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="journey-signature">
          <span className="journey-signature__line" />
          <span>BUILD / THINK / EXPLORE</span>
        </div>
      </div>
    </section>
  );
}

export default Journey;
