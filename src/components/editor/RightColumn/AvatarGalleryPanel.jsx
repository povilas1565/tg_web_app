
import React from "react";
import { AVATARS_DATA } from "../../../constants/app";
import "../../../styles/avatar-gallery.css";

const AvatarGalleryPanel = () => {
    return (
        <section className="tg-card">
            <div className="tg-card-header">
                <div className="tg-card-title gradient-text">Библиотека Аватаров</div>
                <div className="tg-card-actions">
                    <button className="tg-chip tg-chip-small">Все</button>
                    <button className="tg-chip tg-chip-small">Мои аватары</button>
                    <button className="tg-chip tg-chip-small">Команда</button>
                </div>
            </div>

            <div className="tg-avatar-grid">
                {AVATARS_DATA.map(avatar => (
                    <button key={avatar.id} className="tg-avatar-card">
                        <div className="tg-avatar-thumb" />
                        <div className="tg-avatar-info">
                            <span className="tg-avatar-name">{avatar.name}</span>
                            <span className={`tg-avatar-tag ${avatar.tag === 'Pro' ? 'gradient-text' : ''}`}>
                {avatar.tag}
              </span>
                        </div>
                    </button>
                ))}
                <button className="tg-avatar-card tg-avatar-card-add">
                    <div className="tg-avatar-add-icon">+</div>
                    <span className="tg-avatar-add-text gradient-text">Создать новый аватар</span>
                </button>
            </div>
        </section>
    );
};

export default AvatarGalleryPanel;
