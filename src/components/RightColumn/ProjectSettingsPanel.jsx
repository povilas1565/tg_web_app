import React from "react";
import "../../styles/forms.css";

const ProjectSettingsPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Project settings</div>
      </div>
      <div className="tg-fields-grid">
        <div className="tg-field">
          <label className="tg-label">Resolution</label>
          <select className="tg-select">
            <option>1080p</option>
            <option>720p</option>
            <option>4K</option>
          </select>
        </div>
        <div className="tg-field">
          <label className="tg-label">FPS</label>
          <select className="tg-select">
            <option>25</option>
            <option>30</option>
            <option>60</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProjectSettingsPanel;
