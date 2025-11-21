import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/profile.css";
import "../../../styles/buttons.css";

const ProfileScreen = () => {
  const { setScreen } = useApp();

  return (
      <div className="profile-root">
        <section className="tg-card profile-main-card">
          <div className="profile-main-left">
            <div className="profile-avatar-large" />
            <div className="profile-main-info">
              <h1 className="profile-name">NikitaWebTeamLead</h1>
              <p className="profile-email">admin@aiavatars.app</p>
              <span className="profile-role-badge">Владелец рабочей области</span>
            </div>
          </div>
          <div className="profile-main-actions">
            <button className="tg-button-primary">Управление подпиской</button>
            <button className="tg-button-ghost">Выход</button>
          </div>
        </section>

        <section className="profile-subscription">
          <h2>Подписка</h2>
          <div className="profile-subscription-info">
            <div className="profile-subscription-current">
              <span>Текущая подписка: </span>
              <strong>Free</strong>
            </div>
            <div className="profile-videos-left">
              <span>0 видео осталось</span>
            </div>
          </div>

          <div className="profile-subscription-options">
            <div className="profile-subscription-option premium">
              <div className="subscription-header">
                <span className="profile-subscription-name">Premium</span>
                <span className="profile-subscription-badge">Самая выгодная подписка</span>
              </div>
              <span className="profile-subscription-price">3.00 ₽</span>
              <ul className="subscription-features">
                <li>✓ Неограниченное создание видео</li>
                <li>✓ Экспорт в 1080р, до 30 минут видео</li>
              </ul>
            </div>

            <div className="profile-subscription-option">
              <span className="profile-subscription-name">Freemium</span>
              <span className="profile-subscription-price">1.00 ₽</span>
            </div>

            <div className="profile-subscription-option">
              <span className="profile-subscription-name">Basic</span>
              <span className="profile-subscription-price">2.00 ₽</span>
            </div>
          </div>

          <button className="tg-button-primary full-width">Приобрести подписку!!</button>
        </section>

        <section className="profile-feedback">
          <h2>Обратная связь</h2>
          <p>Расскажите нам что вы думаете</p>
          <textarea
              className="tg-textarea"
              placeholder="Ваш отзыв..."
              rows="4"
          />
          <button className="tg-button-ghost">Отправить отзыв</button>
        </section>
      </div>
  );
};

export default ProfileScreen;