import React from "react";
import "../../styles/avatar-gallery.css";
import "../../styles/buttons.css";

const avatars = [
  { id: 1, name: "Anna · Host", tag: "Pro" },
  { id: 2, name: "James · Tech", tag: "Pro" },
  { id: 3, name: "Sofia · Casual", tag: "Free" },
  { id: 4, name: "Noah · Corporate", tag: "Free" }
];

const AvatarGalleryPanel = () => {
  return (
      <section className="tg-card">
        <div className="tg-card-header">
          <div className="tg-card-title">Библиотека Аватаров</div>
          <div className="tg-card-actions">
            <button className="tg-chip tg-chip-small">Все</button>
            <button className="tg-chip tg-chip-small">Мои аватары</button>
            <button className="tg-chip tg-chip-small">Команда</button>
          </div>
        </div>

        <div className="tg-avatar-grid">
          {avatars.map((a) => (
              <button key={a.id} className="tg-avatar-card">
                <div className="tg-avatar-thumb" />
                <div className="tg-avatar-info">
                  <span className="tg-avatar-name">{a.name}</span>
                  <span className="tg-avatar-tag">{a.tag}</span>
                </div>
              </button>
          ))}
          <button className="tg-avatar-card tg-avatar-card-add">
            <div className="tg-avatar-add-icon">+</div>
            <span className="tg-avatar-add-text">Создать новый аватар</span>
          </button>
        </div>
      </section>
  );
};

export default AvatarGalleryPanel;
