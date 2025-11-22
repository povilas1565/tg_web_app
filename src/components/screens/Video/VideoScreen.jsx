import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/video.css";

const VideoScreen = () => {
    const { setScreen } = useApp();

    return (
        <section className="tg-video">
            <div className="tg-video-header">
                <h1 className="gradient-text">Видео</h1>
            </div>

            <div className="tg-video-empty-state">
                <h2 className="gradient-text">У вас пока нет созданных видео</h2>
                <p>Перейдите к созданию, чтобы начать</p>
                <button className="tg-button-primary" onClick={() => setScreen('create-video')}>
                    Создать видео
                </button>
            </div>

            <div className="tg-video-tools">
                <div className="tg-video-tool-card">
                    <h3 className="gradient-text">Перевод Видео</h3>
                </div>
                <div className="tg-video-tool-card">
                    <h3 className="gradient-text">Видеоагент</h3>
                </div>
                <div className="tg-video-tool-card">
                    <h3 className="gradient-text">Мгновенное выделение</h3>
                </div>
            </div>

            <div className="tg-video-draft">
                <div className="tg-video-draft-thumb"></div>
                <div className="tg-video-draft-info">
                    <h4>Видео без названия</h4>
                    <p>20 ноября 2025</p>
                    <span className="tg-video-draft-badge gradient-badge">Черновик</span>
                </div>
            </div>
        </section>
    );
};

export default VideoScreen;
