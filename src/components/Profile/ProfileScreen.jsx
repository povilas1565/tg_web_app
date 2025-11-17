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
            <h1 className="profile-name">Product Team</h1>
            <p className="profile-email">admin@aiavatars.app</p>
            <span className="profile-role-badge">Workspace owner</span>
          </div>
        </div>
        <div className="profile-main-actions">
          <button className="tg-button-primary">Manage subscription</button>
          <button className="tg-button-ghost">Sign out</button>
        </div>
      </section>

      <section className="profile-grid">
        <div className="tg-card profile-card">
          <h2 className="profile-card-title">Usage</h2>
          <p className="profile-card-subtitle">
            Credits and generation limits for this workspace.
          </p>
          <div className="profile-usage-row">
            <div>
              <div className="profile-usage-label">Credits available</div>
              <div className="profile-usage-value">10</div>
            </div>
            <div>
              <div className="profile-usage-label">This month used</div>
              <div className="profile-usage-value">32</div>
            </div>
          </div>
        </div>

        <div className="tg-card profile-card">
          <h2 className="profile-card-title">Team members</h2>
          <ul className="profile-list">
            <li>
              <span>you@aiavatars.app</span>
              <span className="profile-list-role">Owner</span>
            </li>
            <li>
              <span>design@aiavatars.app</span>
              <span className="profile-list-role">Editor</span>
            </li>
            <li>
              <span>marketing@aiavatars.app</span>
              <span className="profile-list-role">Viewer</span>
            </li>
          </ul>
          <button className="tg-link-button">Invite teammate</button>
        </div>
      </section>
    </div>
  );
};

export default ProfileScreen;
