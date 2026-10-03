import { ArrowUpRight } from "lucide-react";
import projects from "../../data/projects";
import "./Work.css";

function Work() {
  return (
    <section className="work section" id="work">
      <div className="container-wide">
        <div className="work__header">
          <div className="section-label">
            <span>02</span>
            <span className="section-label__line" />
            <span>SELECTED EXPERIMENTS</span>
          </div>

          <div className="work__intro">
            <p className="work__kicker">WHAT I BUILD</p>

            <h2>
              From ideas
              <span>to systems.</span>
            </h2>

            <p className="work__description">
              A collection of projects where I experiment with interfaces,
              software systems, APIs, and intelligent applications.
            </p>
          </div>
        </div>

        <div className="work__projects">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project ${
                project.featured ? "project--featured" : ""
              }`}
            >
              <div className="project__visual">
                <div className="project__visual-grid" />

                <div className="project__orb project__orb--one" />
                <div className="project__orb project__orb--two" />

                <div className="project__visual-content">
                  <span className="project__number">{project.number}</span>

                  <span className="project__category">{project.category}</span>
                </div>

                <div className="project__signal">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="project__content">
                <div className="project__meta">
                  <span>LAB EXPERIMENT / {project.number}</span>

                  <span className="project__status">
                    {project.featured ? "FEATURED" : "EXPERIMENT"}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className="project__short-title">{project.shortTitle}</p>

                <p className="project__description">{project.description}</p>

                <div className="project__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project__footer">
                  <a
                    href={`#${project.id}`}
                    className="project__explore"
                    aria-label={`Explore ${project.title}`}
                  >
                    Explore experiment
                    <ArrowUpRight size={16} strokeWidth={1.7} />
                  </a>

                  <span className="project__index">{project.number} / 04</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work__bottom">
          <span>BUILD → THINK → EXPLORE</span>

          <span>04 EXPERIMENTS</span>
        </div>
      </div>
    </section>
  );
}

export default Work;
