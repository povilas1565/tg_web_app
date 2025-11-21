import React from "react";
import PreviewCard from "./PreviewCard.jsx";
import Scenes from "./Scenes.jsx";
import "../../../styles/preview-column.css";

const PreviewColumn = ({ activeTab }) => {
    return (
        <section className="tg-left">
            <PreviewCard />
            <Scenes />
        </section>
    );
};

export default PreviewColumn;