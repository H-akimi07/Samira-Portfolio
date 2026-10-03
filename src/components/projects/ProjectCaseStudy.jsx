function ProjectCaseStudy({ project }) {
  if (!project) return null;

  return (
    <section className="project-case-study">
      <div className="container-wide">
        <div className="project-case-study__header">
          <span>{project.category}</span>

          <h1>{project.title}</h1>

          <p>{project.shortTitle}</p>
        </div>

        <div className="project-case-study__sections">
          <section>
            <span>01 / PROBLEM</span>
            <h2>What problem was I exploring?</h2>
            <p>{project.problem}</p>
          </section>

          <section>
            <span>02 / IDEA</span>
            <h2>What did I decide to build?</h2>
            <p>{project.approach}</p>
          </section>

          <section>
            <span>03 / SYSTEM</span>
            <h2>How does it work?</h2>
            <p>
              The project connects its interface, application logic, data, and
              intelligent workflows into one experience.
            </p>
          </section>

          <section>
            <span>04 / TECHNOLOGY</span>
            <h2>What did I use?</h2>

            <div className="project-case-study__technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </section>

          <section>
            <span>07 / LEARNING</span>
            <h2>What did I understand?</h2>
            <p>{project.learning}</p>
          </section>

          <section>
            <span>08 / NEXT EXPERIMENT</span>
            <h2>Where could this go next?</h2>
            <p>
              Continue exploring the system, improve the experience, and
              investigate new ways technology can make the workflow more useful.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ProjectCaseStudy;
