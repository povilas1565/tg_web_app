import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/home.css";

const HomeScreen = () => {
    const { setScreen } = useApp();

    const homeCards = [
        {
            icon: "🖼️",
            title: "Фото в видео",
            description: "Превратите любую фотографию в видео-аватар",
            gradient: "gradient-purple",
            onClick: () => setScreen('create-video')
        },
        {
            icon: "🎬",
            title: "Создание активов",
            description: "Создавайте видеоролики и изображения для использования в видео",
            gradient: "gradient-accent",
            onClick: () => setScreen('create-video')
        },
        {
            icon: "📱",
            title: "UGC Ad",
            description: "Создайте рекламу, демонстрирующую ваш продукт",
            gradient: "gradient-secondary",
            onClick: () => setScreen('create-video')
        }
    ];

    return (
        <section className="tg-home">
            <div className="tg-home-header">
                <h1 className="tg-home-title gradient-text">
                    Что вы создадите сегодня?
                </h1>
            </div>

            <div className="tg-home-cards">
                {homeCards.map((card, index) => (
                    <div
                        key={index}
                        className={`tg-home-card tg-card-interactive ${card.gradient}-card`}
                        onClick={card.onClick}
                    >
                        <div className="tg-home-card-thumb">
                            <div className="tg-home-card-icon">{card.icon}</div>
                        </div>
                        <div className="tg-home-card-body">
                            <h3 className="gradient-text">{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                        <div className="tg-home-card-arrow">→</div>
                    </div>
                ))}
            </div>

            <div className="tg-home-prompt">
                <div className="tg-prompt-container">
                    <input
                        type="text"
                        placeholder="Type a prompt to generate a video"
                        className="tg-home-prompt-input"
                    />
                    <div className="tg-prompt-badge gradient-badge">✨ AI</div>
                </div>
            </div>
        </section>
    );
};

export default HomeScreen;
