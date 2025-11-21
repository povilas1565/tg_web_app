import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/home.css";

const HomeScreen = () => {
    const { setScreen } = useApp();

    return (
        <section className="tg-home">
            <div className="tg-home-header">
                <h1 className="tg-home-title">Что вы создадите сегодня?</h1>
            </div>

            <div className="tg-home-cards">
                <div className="tg-home-card" onClick={() => setScreen('create-video')}>
                    <div className="tg-home-card-thumb">
                        <div className="tg-home-card-icon">🖼️</div>
                    </div>
                    <div className="tg-home-card-body">
                        <h3>Фото в видео</h3>
                        <p>Превратите любую фотографию в видео-аватар</p>
                    </div>
                </div>

                <div className="tg-home-card">
                    <div className="tg-home-card-thumb">
                        <div className="tg-home-card-icon">🎬</div>
                    </div>
                    <div className="tg-home-card-body">
                        <h3>Создать активы</h3>
                        <p>Создавайте видеоролики и изображения для использования в видео</p>
                    </div>
                </div>

                <div className="tg-home-card">
                    <div className="tg-home-card-thumb">
                        <div className="tg-home-card-icon">📱</div>
                    </div>
                    <div className="tg-home-card-body">
                        <h3>UGC Ad</h3>
                        <p>Создайте рекламу, демонстрирующую ваш продукт</p>
                    </div>
                </div>
            </div>

            <div className="tg-home-prompt">
                <input
                    type="text"
                    placeholder="Введите запрос для создания видео"
                    className="tg-home-prompt-input"
                />
            </div>
        </section>
    );
};

export default HomeScreen;
