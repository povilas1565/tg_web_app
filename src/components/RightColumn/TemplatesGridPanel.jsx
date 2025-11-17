import React from "react";
import "../../styles/templates.css";

const templates = [
  { id: 1, title: "Website hero intro", duration: "0:25", tag: "Marketing" },
  { id: 2, title: "Onboarding guide", duration: "0:45", tag: "Product" },
  { id: 3, title: "Telegram welcome", duration: "0:15", tag: "Social" },
  { id: 4, title: "Course lesson", duration: "1:10", tag: "Education" }
];

const TemplatesGridPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Templates</div>
        <span className="tg-templates-count">{templates.length} items</span>
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
