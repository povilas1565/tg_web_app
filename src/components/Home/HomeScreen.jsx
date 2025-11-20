// src/components/HomeScreen/HomeScreen.jsx
import React from "react";
import "../../styles/home.css";

const HomeScreen = () => {
    return (
        <section className="tg-home">
            <div className="tg-home-header">
                <h1 className="tg-home-title">Что вы создадите сегодня?</h1>
            </div>

            <div className="tg-home-cards">
                <div className="tg-home-card">
                    <div className="tg-home-card-thumb">
                        <img src="path-to-your-image.jpg" alt="photo-to-video" />
                    </div>
                    <div className="tg-home-card-body">
                        <h3>Фото в видео</h3>
                        <p>Превратите любую фотографию в видео-аватар</p>
                    </div>
                </div>

                <div className="tg-home-card">
                    <div className="tg-home-card-thumb">
                        <img src="path-to-your-image.jpg" alt="generate-assets" />
                    </div>
                    <div className="tg-home-card-body">
                        <h3>Создание активов</h3>
                        <p>Создавайте видеоролики и изображения для использования в видео</p>
                    </div>
                </div>

                <div className="tg-home-card">
                    <div className="tg-home-card-thumb">
                        <img src="path-to-your-image.jpg" alt="ugc-ad" />
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
                    placeholder="Type a prompt to generate a video"
                    className="tg-home-prompt-input"
                />
            </div>
        </section>
    );
};

export default HomeScreen;
