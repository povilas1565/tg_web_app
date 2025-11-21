import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/create-video.css";

const CreateVideoScreen = () => {
    const { setScreen } = useApp();

    return (
        <section className="tg-create-video">
            <div className="tg-create-video-header">
                <h1>Создание видео</h1>
            </div>

            <div className="tg-create-options">
                <div className="tg-create-section">
                    <h2>ВИДЕО С ГОВОРЯЩИМ АВАТАРОМ</h2>
                    <div className="tg-create-grid">
                        <div className="tg-create-card">
                            <h3>Фото в видео</h3>
                            <p>Превратите любую фотографию в видео-аватар</p>
                            <button className="tg-button-primary" onClick={() => setScreen('editor')}>
                                Создать
                            </button>
                        </div>

                        <div className="tg-create-card">
                            <h3>Быстрый аватар видео</h3>
                            <p>Быстрое создание односценного видео-аватара</p>
                            <button className="tg-button-primary" onClick={() => setScreen('editor')}>
                                Создать
                            </button>
                        </div>

                        <div className="tg-create-card">
                            <h3>Видео аватара с несколькими сценами</h3>
                            <p>Быстрое создание многосценного видео-аватара</p>
                            <button className="tg-button-primary" onClick={() => setScreen('editor')}>
                                Создать
                            </button>
                        </div>

                        <div className="tg-create-card">
                            <h3>Голосовое зеркало</h3>
                            <p>Используйте свой голос, чтобы усилить голос аватара</p>
                            <button className="tg-button-primary" onClick={() => setScreen('editor')}>
                                Создать
                            </button>
                        </div>
                    </div>
                </div>

                <div className="tg-create-section">
                    <h2>РЕКЛАМНЫЕ ВИДЕО</h2>
                    <div className="tg-create-grid">
                        <div className="tg-create-card">
                            <h3>UGC Ad</h3>
                            <p>Создайте рекламу, демонстрирующую ваш продукт</p>
                            <button className="tg-button-primary">
                                Создать
                            </button>
                        </div>
                    </div>
                </div>

                <div className="tg-create-section">
                    <h2>СОЗДАНИЕ АВАТАРОВ</h2>
                    <div className="tg-create-grid">
                        <div className="tg-create-card">
                            <h3>Клонируйте себя</h3>
                            <p>Запишите себя, чтобы создать реалистичный аватар</p>
                            <button className="tg-button-primary" onClick={() => setScreen('avatars')}>
                                Создать
                            </button>
                        </div>

                        <div className="tg-create-card">
                            <h3>Создайте аватар</h3>
                            <p>Сгенерировать аватар из подсказки></p>
                            <button className="tg-button-primary" onClick={() => setScreen('avatars')}>
                                Создать
                            </button>
                        </div>

                        <div className="tg-create-card">
                            <h3>Смена лица</h3>
                            <p>Объедините свое лицо с другим аватаром</p>
                            <button className="tg-button-primary" onClick={() => setScreen('avatars')}>
                                Создать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateVideoScreen;
