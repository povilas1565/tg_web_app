import React from "react";
import "../../../styles/tabs.css";

const Tabs = ({ activeTab, onChange }) => {
    const tabs = [
        { id: "script", label: "Скрипт" },
        { id: "avatar", label: "Аватар" },
        { id: "templates", label: "Шаблоны" }
    ];

    return (
        <div className="tg-tabs">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`tg-tab ${activeTab === tab.id ? "tg-tab-active" : ""}`}
                    onClick={() => onChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;