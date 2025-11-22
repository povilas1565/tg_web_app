import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/avatars.css";

const AvatarsScreen = () => {
    const { setScreen } = useApp();

    const avatarOptions = [
        {
            title: "Клонируйте себя",
            description: "Запишите себя, чтобы создать реалистичный аватар",
            buttonText: "Записать"
        },
        {
            title: "Создайте аватар",
            description: "Сгенерировать аватар из подсказки",
            buttonText: "Сгенерировать"
        },
        {
            title: "Смена лица",
            description: "Объедините свое лицо с другим аватаром",
            buttonText: "Обменять"
        }
    ];

    const myAvatars = [
        { name: "H Фото" },
        { name: "Сгенерировать H-аватар" }
    ];

    return (
        <section className="tg-avatars">
            <div className="tg-avatars-header">
                <h1 className="gradient-text">Аватары</h1>
                <button className="tg-button-primary">+ Новый аватар</button>
            </div>

            <div className="tg-avatars-content">
                <div className="tg-avatars-empty">
                    <h2 className="gradient-text">Готовы создать ваш первый аватар?</h2>
                    <p>Нажмите здесь чтобы перейти на страницу создания аватара.</p>
                    <button className="tg-button-primary" onClick={() => setScreen('create-video')}>
                        Начать
                    </button>
                </div>

                <div className="tg-avatar-creation-options">
                    {avatarOptions.map((option, index) => (
                        <div key={index} className="tg-avatar-option">
                            <h3 className="gradient-text">{option.title}</h3>
                            <p>{option.description}</p>
                            <button className="tg-button-ghost">{option.buttonText}</button>
                        </div>
                    ))}
                </div>

                <div className="tg-my-avatars">
                    <h3 className="gradient-text">My Avatars</h3>
                    <div className="tg-avatars-grid">
                        {myAvatars.map((avatar, index) => (
                            <div key={index} className="tg-avatar-item">
                                <div className="tg-avatar-thumb" />
                                <span className="gradient-text">{avatar.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AvatarsScreen;