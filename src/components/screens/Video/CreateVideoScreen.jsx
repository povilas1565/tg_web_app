import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/create-video.css";

const CreateVideoScreen = () => {
    const { setScreen } = useApp();

    const creationSections = [
        {
            title: "ВИДЕО С ГОВОРЯЩИМИ АВАТАРАМИ",
            cards: [
                { title: "Фото в видео", description: "Превратите любую фотографию в видео-аватар" },
                { title: "Быстрый аватар видео", description: "Быстрое создание видео-аватара" },
                { title: "Видео аватара с несколькими сценами", description: "Быстрое создание многосценного видео-аватара" },
                { title: "Голосовое зеркало", description: "Используйте свой голос, чтобы усилить голос аватара" }
            ]
        },
        {
            title: "РЕКЛАМНЫЕ ВИДЕО",
            cards: [
                { title: "UGC Ad", description: "Создайте рекламу, демонстрирующую ваш продукт" }
            ]
        },
        {
            title: "СОЗДАТЬ АВАТАРЫ",
            cards: [
                { title: "Клонируйте себя", description: "Запишите себя, чтобы создать реалистичный аватар" },
                { title: "Создайте аватар", description: "Сгенерировать аватар из подсказки" },
                { title: "Смена лица", description: "Объедините свое лицо с другим аватаром" }
            ]
        }
    ];

    return (
        <section className="tg-create-video">
            <div className="tg-create-video-header">
                <h1 className="gradient-text">Создание видео</h1>
            </div>

            <div className="tg-create-options">
                {creationSections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="tg-create-section">
                        <h2 className="gradient-text">{section.title}</h2>
                        <div className="tg-create-grid">
                            {section.cards.map((card, cardIndex) => (
                                <div key={cardIndex} className="tg-create-card">
                                    <h3 className="gradient-text">{card.title}</h3>
                                    <p>{card.description}</p>
                                    <button
                                        className="tg-button-primary"
                                        onClick={() => {
                                            if (section.title === "СОЗДАТЬ АВАТАРЫ") {
                                                setScreen('avatars');
                                            } else {
                                                setScreen('editor');
                                            }
                                        }}
                                    >
                                        Создать
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CreateVideoScreen;
