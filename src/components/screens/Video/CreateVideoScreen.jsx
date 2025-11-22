import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "../../../styles/create-video.css";

const CreateVideoScreen = () => {
    const { setScreen } = useApp();

    const creationSections = [
        {
            title: "TALKING HEAD AVATAR VIDEOS",
            cards: [
                { title: "Photo to Video", description: "Turn any photo into an avatar video" },
                { title: "Quick Avatar Video", description: "Quickly create single-scene avatar video" },
                { title: "Multi-Scene Avatar Video", description: "Quickly create multi-scene avatar video" },
                { title: "Voice Mirror", description: "Use your voice to power an avatar's voice" }
            ]
        },
        {
            title: "PROMOTIONAL VIDEOS",
            cards: [
                { title: "UGC Ad", description: "Create an ad showcasing your product" }
            ]
        },
        {
            title: "CREATE AVATARS",
            cards: [
                { title: "Clone Yourself", description: "Record yourself to create a realistic avatar" },
                { title: "Design an Avatar", description: "Generate avatar from a prompt" },
                { title: "Face Swap", description: "Combine your face with another avatar" }
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
                                            if (section.title === "CREATE AVATARS") {
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
