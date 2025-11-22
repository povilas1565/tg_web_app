import React from "react";
import "../../../styles/avatar-guidelines.css";

const AvatarGuidelinesPanel = () => {
    return (
        <section className="tg-card">
            <div className="tg-card-header">
                <div className="tg-card-title gradient-text">Рекомендации по загрузке</div>
            </div>
            <ul className="tg-guidelines-list">
                <li>Смотрите прямо в камеру, не поворачивая слишком сильно голову.</li>
                <li>Равномерный свет, без резких теней</li>
                <li>Нейтральное выражение лица, без сильных эмоций.</li>
                <li>Минимум аксессуаров, закрывающих лицо</li>
            </ul>
        </section>
    );
};

export default AvatarGuidelinesPanel;