import "../../styles/global.css";
import React from "react";
import "../../styles/profile.css";
import "../../styles/buttons.css";

const ProfileScreen = () => {
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
          <h2>Subscription</h2>
          <div className="profile-subscription-options">
            <div className="profile-subscription-option">
              <span className="profile-subscription-name">Premium</span>
              <span className="profile-subscription-price">3.00 ₽</span>
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
          <button className="tg-button-primary">Обновить до Premium</button>
        </section>

        <section className="profile-feedback">
          <h2>Отзыв</h2>
          <textarea className="tg-textarea" placeholder="Расскажите нам, что вы думаете..." />
          <button className="tg-button-ghost">Отправить отзыв</button>
        </section>
      </div>
  );
};

export default ProfileScreen;
