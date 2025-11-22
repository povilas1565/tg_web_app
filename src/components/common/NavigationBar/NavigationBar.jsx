import React from "react";
import { useApp, SCREENS } from "../../../contexts/AppContext";
import "../../../styles/navigation-bar.css";

const NavigationBar = () => {
    const { appScreen, setScreen } = useApp();

    const navItems = [
        {
            id: SCREENS.HOME,
            label: "Главная",
            icon: "🏠",
            activeIcon: "🏠"
        },
        {
            id: SCREENS.VIDEO,
            label: "Видео",
            icon: "🎬",
            activeIcon: "🎬"
        },
        {
            id: SCREENS.AVATARS,
            label: "Аватары",
            icon: "👤",
            activeIcon: "👤"
        },
        {
            id: SCREENS.PROFILE,
            label: "Профиль",
            icon: "⚙️",
            activeIcon: "⚙️"
        }
    ];

    return (
        <nav className="tg-navigation-bar">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    className={`tg-nav-item ${appScreen === item.id ? "tg-nav-item-active" : ""}`}
                    onClick={() => setScreen(item.id)}
                >
                    <div className="tg-nav-icon">
                        {appScreen === item.id ? item.activeIcon : item.icon}
                    </div>
                    <span className="tg-nav-label">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default NavigationBar;