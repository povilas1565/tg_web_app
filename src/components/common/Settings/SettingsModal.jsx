import React from "react";
import "../../../styles/modal.css";

const SettingsModal = ({ onClose }) => {
  return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title gradient-text">Настройки рабочей области</h2>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>

          <div className="modal-body">
            <div className="tg-fields-grid">
              <div className="tg-field">
                <label className="tg-label">Название рабочей области</label>
                <input className="tg-input" defaultValue="ИИ Аватары" />
              </div>
              <div className="tg-field">
                <label className="tg-label">Язык по умолчанию</label>
                <select className="tg-select" defaultValue="ru">
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>

            <div className="tg-field">
              <label className="tg-label">Тема</label>
              <div className="tg-chips-row">
                <button className="tg-chip tg-chip-active">Темная</button>
                <button className="tg-chip">Светлая</button>
                <button className="tg-chip">Система</button>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="tg-button-ghost" onClick={onClose}>Отменить</button>
            <button className="tg-button-primary" onClick={onClose}>Сохранить изменения</button>
          </div>
        </div>
      </div>
  );
};

export default SettingsModal;