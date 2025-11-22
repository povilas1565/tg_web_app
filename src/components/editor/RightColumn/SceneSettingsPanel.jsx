
import React from "react";
import "../../../styles/forms.css";

const SceneSettingsPanel = () => {
  return (
      <section className="tg-card">
        <div className="tg-card-header">
          <div className="tg-card-title gradient-text">Настройки сцены</div>
        </div>

        <div className="tg-fields-grid">
          <div className="tg-field">
            <label className="tg-label">Фон</label>
            <select className="tg-select">
              <option>Размытый</option>
              <option>Однотонный цвет</option>
              <option>Наклон</option>
            </select>
          </div>
          <div className="tg-field">
            <label className="tg-label">Макет</label>
            <select className="tg-select">
              <option>Аватар в центре</option>
              <option>Аватар слева + текст</option>
              <option>Аватар справа + текст</option>
            </select>
          </div>
        </div>

        <div className="tg-fields-grid">
          <div className="tg-field">
            <label className="tg-label">Субтитры</label>
            <select className="tg-select">
              <option>Автосозданные</option>
              <option>Отключенные</option>
              <option>Загруженные .srt</option>
            </select>
          </div>
          <div className="tg-field">
            <label className="tg-label">Фирменный комплект</label>
            <select className="tg-select">
              <option>По умолчанию</option>
              <option>Бренд: Landing</option>
              <option>Бренд: YouTube</option>
            </select>
          </div>
        </div>
      </section>
  );
};

export default SceneSettingsPanel;