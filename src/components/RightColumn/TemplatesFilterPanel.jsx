import React from "react";
import "../../styles/forms.css";
import "../../styles/buttons.css";

const TemplatesFilterPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Template filters</div>
      </div>
      <div className="tg-fields-grid">
        <div className="tg-field">
          <label className="tg-label">Goal</label>
          <select className="tg-select">
            <option>All</option>
            <option>Marketing</option>
            <option>Education</option>
            <option>Explainer</option>
          </select>
        </div>
        <div className="tg-field">
          <label className="tg-label">Duration</label>
          <select className="tg-select">
            <option>Any</option>
            <option>30 sec</option>
            <option>30–60 sec</option>
            <option>60 sec</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TemplatesFilterPanel;
