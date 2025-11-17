import React from "react";
import "../../styles/projects.css";
import "../../styles/buttons.css";

const mockProjects = [
  {
    id: 1,
    name: "Landing intro video",
    updated: "5 min ago",
    duration: "0:32",
    scenes: 3
  },
  {
    id: 2,
    name: "Telegram welcome",
    updated: "Yesterday",
    duration: "0:15",
    scenes: 1
  },
  {
    id: 3,
    name: "Product explainer",
    updated: "2 days ago",
    duration: "1:05",
    scenes: 5
  }
];

const ProjectsScreen = ({ onOpenProject }) => {
  return (
    <div className="projects-root">
      <div className="projects-header">
        <div>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            Select a project to edit or create a new one.
          </p>
        </div>
        <button
          className="tg-button-primary"
          onClick={() => onOpenProject(null)}
        >
          + New project
        </button>
      </div>

      <div className="projects-grid">
        <button
          className="project-card project-card-new"
          onClick={() => onOpenProject(null)}
        >
          <div className="project-card-add-icon">+</div>
          <div className="project-card-name">Create new project</div>
          <div className="project-card-meta">Start from blank canvas</div>
        </button>

        {mockProjects.map((p) => (
          <button
            key={p.id}
            className="project-card"
            onClick={() => onOpenProject(p)}
          >
            <div className="project-card-thumb" />
            <div className="project-card-body">
              <div className="project-card-name">{p.name}</div>
              <div className="project-card-meta">
                {p.duration} · {p.scenes} scenes
              </div>
              <div className="project-card-updated">
                Last updated: {p.updated}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsScreen;
