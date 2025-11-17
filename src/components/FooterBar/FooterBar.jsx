import React from "react";
import "../../styles/footer.css";
import "../../styles/buttons.css";

const TAB_LABELS = {
  script: {
    title: "New avatar video",
    subtitle: "~ 0:30 · 1 credit will be used"
  },
  avatar: {
    title: "Avatar setup",
    subtitle: "Pick or upload avatar, then continue"
  },
  templates: {
    title: "Choose a template",
    subtitle: "Template settings will be applied to this project"
  }
};

const FooterBar = ({ activeTab }) => {
  const label = TAB_LABELS[activeTab] ?? TAB_LABELS.script;

  return (
    <footer className="tg-footer">
      <div className="tg-footer-left">
        <div className="tg-footer-title">{label.title}</div>
        <div className="tg-footer-sub">{label.subtitle}</div>
      </div>
      <div className="tg-footer-right">
        <button className="tg-button-ghost">Preview script</button>
        <button className="tg-button-primary">
          Continue in Telegram
        </button>
      </div>
    </footer>
  );
};

export default FooterBar;
