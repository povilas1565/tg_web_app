import React from "react";
import { useApp, SCREENS } from "../../../contexts/AppContext";
import "../../../styles/header.css";
import "../../../styles/buttons.css";

const Header = ({ appScreen, currentProject, onBackToProjects, onOpenProfile, onOpenSettings }) => {
  const showBack = appScreen !== SCREENS.HOME && appScreen !== SCREENS.VIDEO && appScreen !== SCREENS.PROJECTS;

  const getHeaderTitle = () => {
    switch (appScreen) {
      case SCREENS.HOME: return "Главная";
      case SCREENS.VIDEO: return "Видео";
      case SCREENS.CREATE_VIDEO: return "Создание видео";
      case SCREENS.PROJECTS: return "Проекты";
      case SCREENS.PROFILE: return "Профиль";
      case SCREENS.AVATARS: return "Аватары";
      case SCREENS.EDITOR: return currentProject?.name || "Редактор";
      default: return "ИИ Аватары";
    }
  };

  return (
      <header className="tg-header">
        <div className="tg-header-left">
          {showBack && (
              <button className="tg-back-button" onClick={onBackToProjects}>
                ← Назад
              </button>
          )}
          <div className="tg-logo">
            <span>AA</span>
          </div>
          <div className="tg-header-text">
            <div className="tg-app-name">{getHeaderTitle()}</div>
            <div className="tg-app-subtitle">
              Создавайте говорящие ИИ-аватары прямо в Telegram
            </div>
            {currentProject && (
                <div className="tg-header-meta">
                  <span>Project: {currentProject.name}</span>
                </div>
            )}
          </div>
        </div>
        <div className="tg-header-right">
          <button className="tg-icon-button" onClick={onOpenSettings}>
            ⚙️
          </button>
          <button className="tg-header-profile" onClick={onOpenProfile}>
            <div className="tg-header-avatar" />
            <div className="tg-header-profile-text">
              <span className="tg-header-profile-name">NikitaWebTeamLead</span>
              <span className="tg-header-profile-role">Free</span>
            </div>
          </button>
        </div>
      </header>
  );
};

export default Header;