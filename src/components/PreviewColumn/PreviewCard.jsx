import React from "react";
import "../../styles/preview.css";

const PreviewCard = () => {
  return (
    <section className="tg-card tg-preview-card">
      <div className="tg-card-header">
        <div className="tg-card-title">Video Preview</div>
        <div className="tg-preview-header-right">
          <select className="tg-mini-select">
            <option>9 : 16</option>
            <option>16 : 9</option>
            <option>1 : 1</option>
          </select>
          <select className="tg-mini-select">
            <option>1080p</option>
            <option>720p</option>
            <option>4K</option>
          </select>
        </div>
      </div>

      <div className="tg-preview-frame">
        <div className="tg-preview-toolbar">
          <button className="tg-preview-tool">Guides</button>
          <button className="tg-preview-tool">Safe zone</button>
          <button className="tg-preview-tool">Grid</button>
        </div>
        <div className="tg-preview-video">
          <div className="tg-preview-avatar-circle" />
          <div className="tg-preview-wave" />
          <div className="tg-preview-badge">AI Avatar</div>
        </div>
      </div>

      <div className="tg-preview-bottom">
        <div className="tg-preview-timeline">
          <div className="tg-preview-progress" />
        </div>
        <div className="tg-preview-meta">
          <span className="tg-preview-time">00:12 / 00:30</span>
          <div className="tg-preview-meta-right">
            <span className="tg-preview-status">Draft</span>
            <button className="tg-link-button">Open timeline</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewCard;
