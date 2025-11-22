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
    const renderScriptTab = () => (
        <>
            <ScriptPanel />
            <AvatarVoicePanel />
            <SceneSettingsPanel />
            <ProjectSettingsPanel />
        </>
    );

    const renderAvatarTab = () => (
        <>
            <AvatarGalleryPanel />
            <AvatarGuidelinesPanel />
        </>
    );

    const renderTemplatesTab = () => (
        <>
            <TemplatesFilterPanel />
            <TemplatesGridPanel />
        </>
    );

    const tabComponents = {
        script: renderScriptTab,
        avatar: renderAvatarTab,
        templates: renderTemplatesTab
    };

    return (
        <section className="tg-right">
            {tabComponents[activeTab]()}
        </section>
    );
};

export default RightColumn;
