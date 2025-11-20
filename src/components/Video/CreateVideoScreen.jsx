import React from "react";
import "../../styles/create-video.css";

const CreateVideoScreen = () => {
    return (
        <section className="tg-create-video">
            <h2>Фото в Видео</h2>
            <p>
                Искусственный интеллект, который превращает фото в видео.
            </p>
            <button className="tg-button-primary">Create Video</button>
        </section>
    );
};

export default CreateVideoScreen;
