import React from "react";
import "../../styles/templates.css";

const templates = [
  { id: 1, title: "Введение героя сайта", duration: "0:25", tag: "Маркетинг" },
  { id: 2, title: "Руководство по адаптации", duration: "0:45", tag: "Продукт" },
  { id: 3, title: "Занятие курса", duration: "1:10", tag: "Образование" }
];

const TemplatesGridPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Шаблоны</div>
        <span className="tg-templates-count">{templates.length} единицы</span>
      </div>
      <div className="tg-templates-grid">
        {templates.map((t) => (
          <button key={t.id} className="tg-template-card">
            <div className="tg-template-thumb" />
            <div className="tg-template-info">
              <span className="tg-template-title">{t.title}</span>
              <span className="tg-template-sub">
                {t.duration} · {t.tag}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TemplatesGridPanel;
