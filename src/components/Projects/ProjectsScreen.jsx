import "../../styles/global.css";
import React from "react";
import "../../styles/projects.css";
import "../../styles/buttons.css";

const mockProjects = [
  {
    id: 1,
    name: "Вступительное видео",
    updated: "5 минут назад",
    duration: "0:32",
    scenes: 3
  },
  {
    id: 2,
    name: "Добро пожаловать в Telegram",
    updated: "Вчера",
    duration: "0:15",
    scenes: 1
  },
  {
    id: 3,
    name: "Объяснение продукта",
    updated: "2 дня назад",
    duration: "1:05",
    scenes: 5
  }
];

const ProjectsScreen = ({ onOpenProject }) => {
  return (
      <div className="projects-root">
        <div className="projects-header">
          <div>
            <h1 className="projects-title">Проекты</h1>
            <p className="projects-subtitle">
              Выберите проект для редактирования или создайте новый.
            </p>
          </div>
          <button
              className="tg-button-primary"
              onClick={() => onOpenProject(null)}
          >
            + Новый проект
          </button>
        </div>

        <div className="projects-grid">
          <button
              className="project-card project-card-new"
              onClick={() => onOpenProject(null)}
          >
            <div className="project-card-add-icon">+</div>
            <div className="project-card-name">Создать новый проект</div>
            <div className="project-card-meta">Начните с чистого холста</div>
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
                    Последнее обновление: {p.updated}
                  </div>
                </div>
              </button>
          ))}
        </div>
      </div>
  );
};

export default ProjectsScreen;
