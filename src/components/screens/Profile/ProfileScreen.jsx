
import React from "react";
import { useApp } from "../../../contexts/AppContext";
import { SUBSCRIPTION_PLANS } from "../../../constants/app";
import "../../../styles/profile.css";

const ProfileScreen = () => {
  const { setScreen } = useApp();

  return (
      <div className="profile-root">
        <section className="tg-card profile-main-card">
          <div className="profile-main-left">
            <div className="profile-avatar-large" />
            <div className="profile-main-info">
              <h1 className="profile-name gradient-text">NikitaWebTeamLead</h1>
              <p className="profile-email">admin@aiavatars.app</p>
              <span className="profile-role-badge gradient-badge">Владелец рабочей области</span>
            </div>
          </div>
          <div className="profile-main-actions">
            <button className="tg-button-primary">Управление подпиской</button>
            <button className="tg-button-ghost">Выход</button>
          </div>
        </section>

        <section className="profile-subscription">
          <h2 className="gradient-text">Подписка</h2>
          <div className="profile-subscription-info">
            <div className="profile-subscription-current">
              <span>Текущая подписка: </span>
              <strong className="gradient-text">Free</strong>
            </div>
            <div className="profile-videos-left">
              <span>0 видео осталось</span>
            </div>
          </div>

          <div className="profile-subscription-options">
            {Object.values(SUBSCRIPTION_PLANS).map((plan, index) => (
                <div key={index} className={`profile-subscription-option ${plan.name === 'Premium' ? 'premium' : ''}`}>
                  <div className="subscription-header">
                    <span className="profile-subscription-name gradient-text">{plan.name}</span>
                    {plan.description && <span className="profile-subscription-badge gradient-text">{plan.description}</span>}
                  </div>
                  <span className="profile-subscription-price gradient-text">{plan.price}</span>
                  {plan.features.length > 0 && (
                      <ul className="subscription-features">
                        {plan.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                  )}
                </div>
            ))}
          </div>

          <button className="tg-button-primary full-width">Приобрести подписку!!</button>
        </section>

        <section className="profile-feedback">
          <h2 className="gradient-text">Обратная связь</h2>
          <p>Расскажите нам что вы думаете</p>
          <textarea className="tg-textarea" placeholder="Ваш отзыв..." rows="4" />
          <button className="tg-button-ghost">Отправить отзыв</button>
        </section>
      </div>
  );
};

export default ProfileScreen;