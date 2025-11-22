// components/screens/Projects/ProjectsScreen.jsx
import React from "react";
import { useApp } from "../../../contexts/AppContext";
import { MOCK_PROJECTS } from "../../../constants/app";
import "../../../styles/projects.css";

const ProjectsScreen = () => {
  const { handleOpenProject } = useApp();

  return (
      <div className="projects-root">
        <div className="projects-header">
          <div>
            <h1 className="projects-title gradient-text">Проекты</h1>
            <p className="projects-subtitle">
              Выберите проект для редактирования или создайте новый.
            </p>
          </div>
          <button className="tg-button-primary" onClick={() => handleOpenProject(null)}>
            + Новый проект
          </button>
        </div>

        <div className="projects-grid">
          <button className="project-card project-card-new" onClick={() => handleOpenProject(null)}>
            <div className="project-card-add-icon gradient-text">+</div>
            <div className="project-card-name gradient-text">Создать новый проект</div>
            <div className="project-card-meta">Начните с чистого холста</div>
          </button>

          {MOCK_PROJECTS.map(project => (
              <button key={project.id} className="project-card" onClick={() => handleOpenProject(project)}>
                <div className="project-card-thumb" />
                <div className="project-card-body">
                  <div className="project-card-name gradient-text">{project.name}</div>
                  <div className="project-card-meta">
                    {project.duration} · {project.scenes} сцены
                  </div>
                  <div className="project-card-updated">
                    Последнее обновление: {project.updated}
                  </div>
                </div>
              </button>
          ))}
        </div>
      </div>
  );
};

export default ProjectsScreen;