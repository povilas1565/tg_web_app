import React from "react";
import ScriptPanel from "./ScriptPanel.jsx";
import AvatarVoicePanel from "./AvatarVoicePanel.jsx";
import SceneSettingsPanel from "./SceneSettingsPanel.jsx";
import AvatarGalleryPanel from "./AvatarGalleryPanel.jsx";
import AvatarGuidelinesPanel from "./AvatarGuidelinesPanel.jsx";
import TemplatesFilterPanel from "./TemplatesFilterPanel.jsx";
import TemplatesGridPanel from "./TemplatesGridPanel.jsx";
import ProjectSettingsPanel from "./ProjectSettingsPanel.jsx";
import "../../../styles/right-column.css";

const RightColumn = ({ activeTab }) => {
    if (activeTab === "avatar") {
        return (
            <section className="tg-right">
                <AvatarGalleryPanel />
                <AvatarGuidelinesPanel />
            </section>
        );
    }

    if (activeTab === "templates") {
        return (
            <section className="tg-right">
                <TemplatesFilterPanel />
                <TemplatesGridPanel />
            </section>
        );
    }

    // script tab (default)
    return (
        <section className="tg-right">
            <ScriptPanel />
            <AvatarVoicePanel />
            <SceneSettingsPanel />
            <ProjectSettingsPanel />
        </section>
    );
};

export default RightColumn;
