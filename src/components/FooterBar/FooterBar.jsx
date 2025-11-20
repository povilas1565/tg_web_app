import "../../styles/global.css";
import React from "react";
import "../../styles/footer.css";
import "../../styles/buttons.css";

const TAB_LABELS = {
  script: {
    title: "Новое аватар-видео",
    subtitle: "~ 0:30 · 1 кредит использован"
  },
  avatar: {
    title: "Настройка аватара",
    subtitle: "Выберите или загрузите аватар, затем продолжить"
  },
  templates: {
    title: "Выберите шаблон",
    subtitle: "Настройки шаблона будут применены к этому проекту"
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
          <button className="tg-button-ghost">Предварительный просмотр</button>
          <button className="tg-button-primary">
            Продолжить в Telegram
          </button>
        </div>
      </footer>
  );
};

export default FooterBar;
