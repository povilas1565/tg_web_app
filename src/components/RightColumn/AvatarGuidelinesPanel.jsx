import React from "react";
import "../../styles/avatar-guidelines.css";

const AvatarGuidelinesPanel = () => {
  return (
    <section className="tg-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Upload guidelines</div>
      </div>
      <ul className="tg-guidelines-list">
        <li>Look straight at the camera, without turning your head too much</li>
        <li>Uniform light, without harsh shadows</li>
        <li>Neutral facial expressions, without strong emotions</li>
        <li>A minimum of accessories that cover the face</li>
      </ul>
    </section>
  );
};

export default AvatarGuidelinesPanel;
