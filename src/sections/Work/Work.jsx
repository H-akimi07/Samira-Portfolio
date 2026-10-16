import { ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import "./Work.css";

function Work() {
  const projectCount = String(projects.length).padStart(2, "0");

  return (
    <section className="work section" id="work">
      <div className="container-wide">
        <div className="work__header">
          <div className="section-label">
            <span>02</span>
            <span className="section-label__line" />
            <span>SELECTED WORK</span>
          </div>

          <div className="work__intro">
            <p className="work__kicker">A SELECTION OF MY WORK</p>

            <h2>
              Ideas into
              <span>real things.</span>
            </h2>

            <p className="work__description">
              Projects exploring web experiences, connected systems, and
              thoughtful applications of AI — built through experimentation,
              iteration, and learning.
            </p>
          </div>
        </div>

        <div className="work__projects">
          {projects.map((project, index) => {
            const projectNumber =
              project.number || String(index + 1).padStart(2, "0");
            const hasGithub =
              typeof project.githubUrl === "string" &&
              project.githubUrl.trim().length > 0;
            const hasDemo =
              typeof project.demoUrl === "string" &&
              project.demoUrl.trim().length > 0;

            return (
              <article
                key={project.id}
                className={`project ${project.featured ? "project--featured" : ""}`}
              >
                <div className="project__visual" aria-hidden="true">
                  <div className="project__visual-grid" />
                  <div className="project__visual-glow" />
                  <div className="project__orb project__orb--one" />
                  <div className="project__orb project__orb--two" />
                  <div className="project__visual-content">
                    <span className="project__number">{projectNumber}</span>
                    <span className="project__category">
                      {project.category}
                    </span>
                  </div>
                  <div className="project__visual-caption">
                    <span className="project__visual-dot" />
                    <span>
                      {project.visualLabel ||
                        project.shortTitle ||
                        "PROJECT STUDY"}
                    </span>
                  </div>
                </div>

                <div className="project__content">
                  <div className="project__meta">
                    <span>PROJECT / {projectNumber}</span>
                    <span className="project__status">
                      {project.featured
                        ? "FEATURED PROJECT"
                        : "INDEPENDENT PROJECT"}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  {project.shortTitle && (
                    <p className="project__short-title">{project.shortTitle}</p>
                  )}

                  <p className="project__description">{project.description}</p>

                  {Array.isArray(project.technologies) &&
                    project.technologies.length > 0 && (
                      <div
                        className="project__technologies"
                        aria-label="Technologies"
                      >
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    )}

                  <div className="project__footer">
                    <Link
                      to={`/project/${project.id}`}
                      className="project__explore"
                      aria-label={`View ${project.title} case study`}
                    >
                      <span>Explore project</span>
                      <ArrowUpRight size={16} strokeWidth={1.7} />
                    </Link>

                    <div className="project__external-links">
                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project__external-link"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <Code2 size={15} strokeWidth={1.7} />
                          <span>Source</span>
                        </a>
                      )}

                      {hasDemo && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project__external-link"
                          aria-label={`${project.title} live demo`}
                        >
                          <span>Live demo</span>
                          <ArrowUpRight size={15} strokeWidth={1.7} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="work__bottom">
          <span>MAKE / TEST / REFINE</span>
          <span>
            {projectCount} PROJECT{projects.length === 1 ? "" : "S"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Work;
