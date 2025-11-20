import React from "react";
import "../../styles/forms.css";
import "../../styles/buttons.css";

const TemplatesFilterPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Фильтры шаблонов</div>
      </div>
      <div className="tg-fields-grid">
        <div className="tg-field">
          <label className="tg-label">Цель</label>
          <select className="tg-select">
            <option>Все</option>
            <option>Маркетинг</option>
            <option>Образование</option>
          </select>
        </div>
        <div className="tg-field">
          <label className="tg-label">Длительность</label>
          <select className="tg-select">
            <option>Любая</option>
            <option>30 сек</option>
            <option>30–60 сек</option>
            <option>60 сек</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TemplatesFilterPanel;
