import React from "react";
import "../../styles/forms.css";
import "../../styles/avatar-panel.css";
import "../../styles/buttons.css";

const AvatarVoicePanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Avatar & Voice</div>
        <button className="tg-link-button">Manage avatars</button>
      </div>

      <div className="tg-avatar-row">
        <div className="tg-avatar-preview">
          <div className="tg-avatar-circle" />
          <div className="tg-avatar-label">Custom avatar</div>
        </div>
        <div className="tg-avatar-actions">
          <button className="tg-button-ghost">Upload photo</button>
          <button className="tg-button-ghost">Choose from gallery</button>
          <button className="tg-link-button">Tips for best results</button>
        </div>
      </div>

      <div className="tg-fields-grid">
        <div className="tg-field">
          <label className="tg-label">Voice</label>
          <select className="tg-select">
            <option>Male · Neutral</option>
            <option>Female · Warm</option>
            <option>Male · Energetic</option>
            <option>Female · Calm</option>
          </select>
        </div>
        <div className="tg-field">
          <label className="tg-label">Language</label>
          <select className="tg-select">
            <option>Russian</option>
            <option>English</option>
          </select>
        </div>
      </div>

      <div className="tg-field">
        <label className="tg-label">Emotion</label>
        <div className="tg-chips-row">
          <button className="tg-chip tg-chip-active">Neutral</button>
          <button className="tg-chip">Friendly</button>
          <button className="tg-chip">Serious</button>
          <button className="tg-chip">Excited</button>
        </div>
      </div>
    </section>
  );
};

export default AvatarVoicePanel;
