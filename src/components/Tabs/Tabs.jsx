import React from "react";
import "../../styles/tabs.css";

const Tabs = ({ activeTab, onChange }) => {
  return (
    <div className="tg-tabs">
      <button
        className={
          "tg-tab" + (activeTab === "script" ? " tg-tab-active" : "")
        }
        onClick={() => onChange("script")}
      >
        Script
      </button>
      <button
        className={
          "tg-tab" + (activeTab === "avatar" ? " tg-tab-active" : "")
        }
        onClick={() => onChange("avatar")}
      >
        Avatar
      </button>
      <button
        className={
          "tg-tab" + (activeTab === "templates" ? " tg-tab-active" : "")
        }
        onClick={() => onChange("templates")}
      >
        Templates
      </button>
    </div>
  );
};

export default Tabs;
