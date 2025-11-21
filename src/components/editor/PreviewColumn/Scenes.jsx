import React from "react";
import "../../../styles/scenes.css";

const Scenes = () => {
  return (
      <section className="tg-scenes">
        <div className="tg-scenes-header">
          <div className="tg-scenes-left">
            <span>Scenes</span>
            <span className="tg-scenes-sub">3 сцены · 0:38 общее</span>
          </div>
          <div className="tg-scenes-actions">
            <button className="tg-link-button">Автоматически разделенный скрипт</button>
            <button className="tg-link-button">+ Добавить сцену</button>
          </div>
        </div>
        <div className="tg-scenes-list">
          <button className="tg-scene tg-scene-active">
            <span className="tg-scene-index">1</span>
            <div className="tg-scene-body">
              <span className="tg-scene-title">Введение</span>
              <span className="tg-scene-sub">0:10 · Аватар + текст</span>
            </div>
          </button>
          <button className="tg-scene">
            <span className="tg-scene-index">2</span>
            <div className="tg-scene-body">
              <span className="tg-scene-title">Главное сообщение</span>
              <span className="tg-scene-sub">0:20 · Аватар + скрин</span>
            </div>
          </button>
          <button className="tg-scene">
            <span className="tg-scene-index">3</span>
            <div className="tg-scene-body">
              <span className="tg-scene-title">CTA</span>
              <span className="tg-scene-sub">0:08 · Только аватар</span>
            </div>
          </button>
        </div>
      </section>
  );
};

export default Scenes;
