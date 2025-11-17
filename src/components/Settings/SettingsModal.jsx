import React from "react";
import "../../styles/modal.css";
import "../../styles/forms.css";
import "../../styles/buttons.css";

const SettingsModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Workspace settings</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="tg-fields-grid">
            <div className="tg-field">
              <label className="tg-label">Workspace name</label>
              <input className="tg-textarea" defaultValue="AI Avatars Studio" />
            </div>
            <div className="tg-field">
              <label className="tg-label">Default language</label>
              <select className="tg-select" defaultValue="en">
                <option value="en">English</option>
                <option value="ru">Russian</option>
              </select>
            </div>
          </div>

          <div className="tg-field" style={{ marginTop: 8 }}>
            <label className="tg-label">Theme</label>
            <div className="tg-chips-row">
              <button className="tg-chip tg-chip-active">Dark</button>
              <button className="tg-chip">Light</button>
              <button className="tg-chip">System</button>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="tg-button-ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="tg-button-primary" onClick={onClose}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
