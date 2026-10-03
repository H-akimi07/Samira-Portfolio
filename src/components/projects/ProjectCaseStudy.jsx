import { ArrowDown, ArrowUpRight } from "lucide-react";
import ProjectScene from "../../three/ProjectScene";
import "./ProjectCaseStudy.css";

function ProjectCaseStudy({ project }) {
  if (!project) return null;

  return (
    <div className="case-study">
      {/* Hero */}
      <section className="case-study__hero">
        <div className="container-wide">
          <div className="case-study__hero-meta">
            <span>LAB EXPERIMENT / {project.number}</span>
            <span>{project.category}</span>
          </div>

          <div className="case-study__hero-grid">
            <div className="case-study__hero-content">
              <span className="case-study__eyebrow">
                {project.number} / CASE STUDY
              </span>

              <h1>{project.title}</h1>

              <p className="case-study__subtitle">{project.shortTitle}</p>

              <p className="case-study__hero-description">
                {project.description}
              </p>

              <div className="case-study__hero-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="case-study__button"
                  >
                    GitHub
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="case-study__button case-study__button--secondary"
                  >
                    Live demo
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="case-study__hero-visual">
              <ProjectScene
                projectId={project.id}
                visualType={project.visualType}
              />
              <span className="case-study__visual-label">
                SYSTEM / {project.number}
              </span>

              <span className="case-study__visual-coordinate">
                {project.category}
              </span>
            </div>
          </div>

          <div className="case-study__scroll">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="case-study__overview">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>00</span>
            <span className="case-study__section-line" />
            <span>OVERVIEW</span>
          </div>

          <div className="case-study__overview-grid">
            <h2>
              {project.title}
              <span>as a system.</span>
            </h2>

            <p>{project.approach}</p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="case-study__section">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>01</span>
            <span className="case-study__section-line" />
            <span>PROBLEM</span>
          </div>

          <div className="case-study__content-grid">
            <h2>What problem was I exploring?</h2>

            <div>
              <p className="case-study__large-text">{project.problem}</p>

              <p>
                The goal was to explore how a digital product could bring
                fragmented information into a more organized workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Idea */}
      <section className="case-study__section case-study__section--dark">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>02</span>
            <span className="case-study__section-line" />
            <span>IDEA</span>
          </div>

          <div className="case-study__content-grid">
            <h2>What did I decide to build?</h2>

            <div>
              <p className="case-study__large-text">{project.idea}</p>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* System */}
      <section className="case-study__section">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>03</span>
            <span className="case-study__section-line" />
            <span>SYSTEM</span>
          </div>

          <div className="case-study__content-grid">
            <h2>How does it work?</h2>

            <div>
              <p className="case-study__large-text">{project.systemIntro}</p>

              <div className="case-study__flow">
                {project.systemFlow.map((step, index) => (
                  <div key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="case-study__section case-study__section--dark">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>04</span>
            <span className="case-study__section-line" />
            <span>TECHNOLOGY</span>
          </div>

          <div className="case-study__content-grid">
            <h2>What did I use?</h2>

            <div className="case-study__technology-list">
              {project.technologies.map((technology, index) => (
                <div key={technology}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <strong>{technology}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="case-study__section">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>05</span>
            <span className="case-study__section-line" />
            <span>CAPABILITIES</span>
          </div>

          <div className="case-study__content-grid">
            <h2>What can the system do?</h2>

            <div className="case-study__features">
              {project.features.map((feature, index) => (
                <div key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="case-study__section">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>06</span>
            <span className="case-study__section-line" />
            <span>CHALLENGES</span>
          </div>

          <div className="case-study__content-grid">
            <h2>What was difficult?</h2>

            <div className="case-study__challenge-list">
              {project.challenges?.map((challenge, index) => (
                <article key={challenge.title}>
                  <div className="case-study__challenge-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="case-study__section case-study__section--dark">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>07</span>
            <span className="case-study__section-line" />
            <span>SOLUTIONS</span>
          </div>

          <div className="case-study__content-grid">
            <h2>How did I approach them?</h2>

            <div className="case-study__challenge-list">
              {project.solutions?.map((solution, index) => (
                <article key={solution.title}>
                  <div className="case-study__challenge-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="case-study__section case-study__section--dark">
        <div className="container-wide">
          <div className="case-study__section-label">
            <span>08</span>
            <span className="case-study__section-line" />
            <span>LEARNING</span>
          </div>

          <div className="case-study__learning">
            <span className="case-study__eyebrow">WHAT I UNDERSTOOD</span>

            <h2>{project.learning}</h2>
          </div>
        </div>
      </section>

      {/* Next Experiment */}
      <section className="case-study__next">
        <div className="container-wide">
          <span className="case-study__eyebrow">09 / NEXT EXPERIMENT</span>

          <h2>
            Keep building.
            <span>Keep exploring.</span>
          </h2>

          <p>{project.nextExperiment}</p>

          <a href="/#work" className="case-study__next-link">
            Explore other experiments
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectCaseStudy;
