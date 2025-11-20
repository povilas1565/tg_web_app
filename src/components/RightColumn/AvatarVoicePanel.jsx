import React from "react";
import "../../styles/forms.css";
import "../../styles/avatar-panel.css";
import "../../styles/buttons.css";

const AvatarVoicePanel = () => {
  return (
      <section className="tg-card">
        <div className="tg-card-header">
          <div className="tg-card-title">Аватар и Голос</div>
          <button className="tg-link-button">Управление аватарами</button>
        </div>

        <div className="tg-avatar-row">
          <div className="tg-avatar-preview">
            <div className="tg-avatar-circle" />
            <div className="tg-avatar-label">Пользовательский аватар</div>
          </div>
          <div className="tg-avatar-actions">
            <button className="tg-button-ghost">Загрузить фото</button>
            <button className="tg-button-ghost">Выбрать из галереи</button>
            <button className="tg-link-button">Советы для достижения наилучших результатов</button>
          </div>
        </div>

        <div className="tg-fields-grid">
          <div className="tg-field">
            <label className="tg-label">Голос</label>
            <select className="tg-select">
              <option>Мужской · Нейтральный</option>
              <option>Женский · Тихий</option>
              <option>Мужской · Энергичный</option>
              <option>Женский · Cпокойный</option>
            </select>
          </div>
          <div className="tg-field">
            <label className="tg-label">Язык</label>
            <select className="tg-select">
              <option>Русский</option>
            </select>
          </div>
        </div>

        <div className="tg-field">
          <label className="tg-label">Эмоции</label>
          <div className="tg-chips-row">
            <button className="tg-chip tg-chip-active">Нейтральный</button>
            <button className="tg-chip">Серьезный</button>
            <button className="tg-chip">Взволнованный</button>
          </div>
        </div>
      </section>
  );
};

export default AvatarVoicePanel;
