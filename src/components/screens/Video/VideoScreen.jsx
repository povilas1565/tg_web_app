import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/video.css";

const VideoScreen = () => {
    const { setScreen } = useApp();

    return (
        <section className="tg-video">
            <div className="tg-video-header">
                <h1>Видео</h1>
            </div>

            <div className="tg-video-empty-state">
                <h2>У вас пока нет созданных видео</h2>
                <p>Перейдите к созданию, чтобы начать</p>
                <button className="tg-button-primary" onClick={() => setScreen('create-video')}>
                    Создать видео
                </button>
            </div>

            <div className="tg-video-tools">
                <div className="tg-video-tool-card">
                    <h3>Перевод видео</h3>
                </div>
                <div className="tg-video-tool-card">
                    <h3>Видеоагент</h3>
                </div>
                <div className="tg-video-tool-card">
                    <h3>Мгновенное выделение</h3>
                </div>
            </div>

            {/* Draft Video Example */}
            <div className="tg-video-draft">
                <div className="tg-video-draft-thumb"></div>
                <div className="tg-video-draft-info">
                    <h4>Неопознанное видео</h4>
                    <p>20 Ноября 2025</p>
                    <span className="tg-video-draft-badge">Черновик</span>
                </div>
            </div>
        </section>
    );
};

export default VideoScreen;
