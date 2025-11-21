import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/avatars.css";

const AvatarsScreen = () => {
    const { setScreen } = useApp();

    return (
        <section className="tg-avatars">
            <div className="tg-avatars-header">
                <h1>Аватары</h1>
                <button className="tg-button-primary">+ Новый аватар</button>
            </div>

            <div className="tg-avatars-content">
                <div className="tg-avatars-empty">
                    <h2>Готовы создать ваш первый аватар?</h2>
                    <p>Нажмите здесь чтобы перейти на страницу создания аватара.</p>
                    <button className="tg-button-primary" onClick={() => setScreen('create-video')}>
                        Начать
                    </button>
                </div>

                <div className="tg-avatar-creation-options">
                    <div className="tg-avatar-option">
                        <h3>Клонируйте себя</h3>
                        <p>Запишите себя, чтобы создать реалистичный аватар</p>
                        <button className="tg-button-ghost">Записать</button>
                    </div>

                    <div className="tg-avatar-option">
                        <h3>Создайте аватар</h3>
                        <p>Сгенерировать аватар из подсказки</p>
                        <button className="tg-button-ghost">Сгенерировать</button>
                    </div>

                    <div className="tg-avatar-option">
                        <h3>Смена лица</h3>
                        <p>Объедините свое лицо с другим аватаром</p>
                        <button className="tg-button-ghost">Обменять</button>
                    </div>
                </div>

                <div className="tg-my-avatars">
                    <h3>Мои Аватары</h3>
                    <div className="tg-avatars-grid">
                        <div className="tg-avatar-item">
                            <div className="tg-avatar-thumb"></div>
                            <span>H Фото</span>
                        </div>
                        <div className="tg-avatar-item">
                            <div className="tg-avatar-thumb"></div>
                            <span>Создать H аватар</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AvatarsScreen;