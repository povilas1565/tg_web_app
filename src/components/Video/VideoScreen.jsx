import React from "react";
import "../../styles/video.css";

const VideoScreen = () => {
    return (
        <section className="tg-video">
            <div className="tg-video-empty-state">
                <h2>Вы еще не создали ни одного видео</h2>
                <p>Перейдите в раздел «Создание», чтобы начать создание своего первого видео.</p>
                <button className="tg-button-primary">Создать видео</button>
            </div>
        </section>
    );
};

export default VideoScreen;
