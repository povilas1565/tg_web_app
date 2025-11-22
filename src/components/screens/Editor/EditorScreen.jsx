import React from 'react';
import { useApp } from '../../../contexts/AppContext';
import Tabs from '../../common/Tabs/Tabs';
import PreviewColumn from '../../editor/PreviewColumn/PreviewColumn';
import RightColumn from '../../editor/RightColumn/RightColumn';

const EditorScreen = () => {
    const { activeTab, setActiveTab } = useApp();

    return (
        <>
            <Tabs activeTab={activeTab} onChange={setActiveTab} />
            <main className="app-main-grid">
                <PreviewColumn activeTab={activeTab} />
                <RightColumn activeTab={activeTab} />
            </main>
        </>
    );
};

export default EditorScreen;