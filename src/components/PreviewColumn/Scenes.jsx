import React from "react";
import "../../styles/scenes.css";

const Scenes = () => {
  return (
    <section className="tg-scenes">
      <div className="tg-scenes-header">
        <div className="tg-scenes-left">
          <span>Scenes</span>
          <span className="tg-scenes-sub">3 scenes · 0:38 total</span>
        </div>
        <div className="tg-scenes-actions">
          <button className="tg-link-button">Auto-split script</button>
          <button className="tg-link-button">+ Add scene</button>
        </div>
      </div>
      <div className="tg-scenes-list">
        <button className="tg-scene tg-scene-active">
          <span className="tg-scene-index">1</span>
          <div className="tg-scene-body">
            <span className="tg-scene-title">Intro</span>
            <span className="tg-scene-sub">0:10 · Avatar + text</span>
          </div>
        </button>
        <button className="tg-scene">
          <span className="tg-scene-index">2</span>
          <div className="tg-scene-body">
            <span className="tg-scene-title">Main message</span>
            <span className="tg-scene-sub">0:20 · Avatar + screen</span>
          </div>
        </button>
        <button className="tg-scene">
          <span className="tg-scene-index">3</span>
          <div className="tg-scene-body">
            <span className="tg-scene-title">CTA</span>
            <span className="tg-scene-sub">0:08 · Avatar only</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Scenes;
