import React from "react";
import "../../styles/forms.css";
import "../../styles/buttons.css";

const ScriptPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Скрипт</div>
        <div className="tg-card-actions">
          <button className="tg-chip tg-chip-small">Переписывание с ИИ</button>
          <button className="tg-chip tg-chip-small">Перевод</button>
          <button className="tg-chip tg-chip-small">Коротко</button>
        </div>
      </div>

      <div className="tg-field">
        <label className="tg-label">Сценарий</label>
        <textarea
          rows={6}
          className="tg-textarea"
          placeholder="Напишите, что должен сказать ваш аватар..."
        />
        <div className="tg-field-footer">
          <span className="tg-helper">0 / 600 символов</span>
          <div className="tg-field-footer-right">
            <button className="tg-link-button">Вставьте пример</button>
            <button className="tg-link-button">Импорт из файла</button>
          </div>
        </div>
      </div>

      <div className="tg-field tg-field-inline">
        <label className="tg-label">Скорость чтения</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="40"
          className="tg-range"
        />
        <span className="tg-range-value">Нормальный</span>
      </div>
    </section>
  );
};

export default ScriptPanel;
