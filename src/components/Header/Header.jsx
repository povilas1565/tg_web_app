import React from "react";
import "../../styles/header.css";
import "../../styles/buttons.css";

const Header = ({ appScreen, currentProject, onBackToProjects, onOpenProfile, onOpenSettings }) => {
  const showBack = appScreen !== "projects";

  return (
    <header className="tg-header">
      <div className="tg-header-left">
        {showBack && (
          <button className="tg-back-button" onClick={onBackToProjects}>
            ← Projects
          </button>
        )}
        <div className="tg-logo">
          <span>AA</span>
        </div>
        <div className="tg-header-text">
          <div className="tg-app-name">AI Avatars</div>
          <div className="tg-app-subtitle">
            Create talking AI avatars directly in Telegram
          </div>
          <div className="tg-header-meta">
            <span>Workspace: Studio</span>
            {currentProject ? (
              <span>Project: {currentProject.name}</span>
            ) : (
              <span>No project selected</span>
            )}
          </div>
        </div>
      </div>
      <div className="tg-header-right">
        <button className="tg-icon-button" onClick={onOpenSettings}>
          ⚙
        </button>
        <button className="tg-header-profile" onClick={onOpenProfile}>
          <div className="tg-header-avatar" />
          <div className="tg-header-profile-text">
            <span className="tg-header-profile-name">Product Team</span>
            <span className="tg-header-profile-role">admin@aiavatars.app</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
