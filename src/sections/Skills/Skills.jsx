import { useState } from "react";
import { ArrowUpRight, Layers3 } from "lucide-react";

import skillGroups from "../../data/skills";
import "../PortfolioSections.css";

function Skills() {
  const [activeGroup, setActiveGroup] = useState("frontend");

  const selectedGroup = skillGroups.find((group) => group.id === activeGroup);

  return (
    <section id="skills" className="editorial-section skills-section">
      <div className="container-wide">
        <div className="editorial-heading">
          <span className="section-label">06 / SKILLS & TOOLS</span>

          <h2>
            Tools are useful.
            <br />
            <span>Understanding matters.</span>
          </h2>

          <p>
            My toolkit is growing through hands-on projects, independent
            learning, and experimentation. I focus on understanding how the
            pieces work together.
          </p>
        </div>

        <div className="skills-layout">
          <div className="skills-index" aria-label="Skill categories">
            {skillGroups.map((group, index) => (
              <button
                type="button"
                key={group.id}
                className={`skills-index__item ${
                  activeGroup === group.id ? "skills-index__item--active" : ""
                }`}
                onClick={() => setActiveGroup(group.id)}
                aria-pressed={activeGroup === group.id}
              >
                <span>0{index + 1}</span>
                <span>{group.label}</span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>

          <div className="skills-detail" aria-live="polite">
            <div className="skills-detail__heading">
              <Layers3 size={21} strokeWidth={1.5} />
              <span>SELECTED TOOLSET</span>
            </div>

            <h3>{selectedGroup.label}</h3>
            <p>{selectedGroup.description}</p>

            <div className="skills-tags">
              {selectedGroup.skills.map((skill) => (
                <span key={skill} className="skills-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="skills-detail__footer">
              <span>LEARN / APPLY / REFINE</span>
              <span>{selectedGroup.skills.length} TOPICS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
