import React from "react";
import "../../../styles/scenes.css";

const Scenes = () => {
  const scenes = [
    { id: 1, index: 1, title: "Введение", subtitle: "0:10 · Аватар + текст", active: true },
    { id: 2, index: 2, title: "Главное сообщение", subtitle: "0:20 · Аватар + скрин", active: false },
    { id: 3, index: 3, title: "CTA", subtitle: "0:08 · Только аватар", active: false }
  ];

  return (
      <section className="tg-scenes">
        <div className="tg-scenes-header">
          <div className="tg-scenes-left">
            <span className="gradient-text">Scenes</span>
            <span className="tg-scenes-sub">3 сцены · 0:38 общее</span>
          </div>
          <div className="tg-scenes-actions">
            <button className="tg-link-button">Автоматически разделенный скрипт</button>
            <button className="tg-link-button">+ Добавить сцену</button>
          </div>
        </div>
        <div className="tg-scenes-list">
          {scenes.map(scene => (
              <button key={scene.id} className={`tg-scene ${scene.active ? "tg-scene-active" : ""}`}>
                <span className="tg-scene-index">{scene.index}</span>
                <div className="tg-scene-body">
                  <span className="tg-scene-title">{scene.title}</span>
                  <span className="tg-scene-sub">{scene.subtitle}</span>
                </div>
              </button>
          ))}
        </div>
      </section>
  );
};

export default Scenes;
