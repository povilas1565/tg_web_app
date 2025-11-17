import React from "react";
import "../../styles/forms.css";

const SceneSettingsPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Scene settings</div>
      </div>

      <div className="tg-fields-grid">
        <div className="tg-field">
          <label className="tg-label">Background</label>
          <select className="tg-select">
            <option>Blurred office</option>
            <option>Plain color</option>
            <option>Gradient</option>
          </select>
        </div>
        <div className="tg-field">
          <label className="tg-label">Layout</label>
          <select className="tg-select">
            <option>Avatar center</option>
            <option>Avatar left + text</option>
            <option>Avatar right + text</option>
          </select>
        </div>
      </div>

      <div className="tg-fields-grid">
        <div className="tg-field">
          <label className="tg-label">Subtitles</label>
          <select className="tg-select">
            <option>Auto-generate</option>
            <option>Disabled</option>
            <option>Upload .srt</option>
          </select>
        </div>
        <div className="tg-field">
          <label className="tg-label">Brand kit</label>
          <select className="tg-select">
            <option>Default</option>
            <option>Brand: Landing</option>
            <option>Brand: YouTube</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SceneSettingsPanel;
