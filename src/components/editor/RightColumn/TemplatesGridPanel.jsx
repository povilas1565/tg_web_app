import React from "react";
import { TEMPLATES_DATA } from "../../../constants/app";
import "../../../styles/templates.css";

const TemplatesGridPanel = () => {
    return (
        <section className="tg-card">
            <div className="tg-card-header">
                <div className="tg-card-title gradient-text">Шаблоны</div>
                <span className="tg-templates-count">{TEMPLATES_DATA.length} единицы</span>
            </div>
            <div className="tg-templates-grid">
                {TEMPLATES_DATA.map(template => (
                    <button key={template.id} className="tg-template-card">
                        <div className="tg-template-thumb" />
                        <div className="tg-template-info">
                            <span className="tg-template-title">{template.title}</span>
                            <span className="tg-template-sub">
                {template.duration} · {template.tag}
              </span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default TemplatesGridPanel;
