import React from "react";
import "../../styles/forms.css";
import "../../styles/buttons.css";

const ScriptPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Script</div>
        <div className="tg-card-actions">
          <button className="tg-chip tg-chip-small">AI rewrite</button>
          <button className="tg-chip tg-chip-small">Translate</button>
          <button className="tg-chip tg-chip-small">Shorten</button>
        </div>
      </div>

      <div className="tg-field">
        <label className="tg-label">Scenario</label>
        <textarea
          rows={6}
          className="tg-textarea"
          placeholder="Write what your avatar should say..."
        />
        <div className="tg-field-footer">
          <span className="tg-helper">0 / 600 symbols</span>
          <div className="tg-field-footer-right">
            <button className="tg-link-button">Insert example</button>
            <button className="tg-link-button">Import from file</button>
          </div>
        </div>
      </div>

      <div className="tg-field tg-field-inline">
        <label className="tg-label">Reading speed</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="40"
          className="tg-range"
        />
        <span className="tg-range-value">Normal</span>
      </div>
    </section>
  );
};

export default ScriptPanel;
