import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects";
import ProjectCaseStudy from "../../components/projects/ProjectCaseStudy";
import "./ProjectPage.css";

function ProjectPage() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="project-page project-page--not-found">
        <div className="container-wide">
          <span className="section-label">PROJECT / NOT FOUND</span>

          <h1>Experiment not found.</h1>

          <Link to="/" className="project-page__back">
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-page">
      <div className="container-wide">
        <Link to="/#work" className="project-page__back">
          <ArrowLeft size={16} />
          Back to selected experiments
        </Link>
      </div>

      <ProjectCaseStudy project={project} />
    </main>
  );
}

export default ProjectPage;
