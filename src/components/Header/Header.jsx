import "../../styles/global.css";
import "../../styles/buttons.css";

const Header = ({ appScreen, currentProject, onBackToProjects, onOpenProfile, onOpenSettings }) => {
  const showBack = appScreen !== "projects";

  return (
      <header className="tg-header">
        <div className="tg-header-left">
          {showBack && (
              <button className="tg-back-button" onClick={onBackToProjects}>
                ← Проекты
              </button>
          )}
          <div className="tg-logo">
            <span>AA</span>
          </div>
          <div className="tg-header-text">
            <div className="tg-app-name">ИИ Аватары</div>
            <div className="tg-app-subtitle">
              Создавайте говорящие ИИ-аватары прямо в Telegram
            </div>
            <div className="tg-header-meta">
              {currentProject ? (
                  <span>Project: {currentProject.name}</span>
              ) : (
                  <span>Проект не выбран</span>
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
              <span className="tg-header-profile-name">NikitaWebTeamLead</span>
              <span className="tg-header-profile-role">admin@aiavatars.app</span>
            </div>
          </button>
        </div>
      </header>
  );
};

export default Header;
