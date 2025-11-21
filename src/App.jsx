import { AppProvider, useApp } from "./contexts/AppContext";
import Layout from "./components/common/Layout/Layout";
import Header from "./components/common/Header/Header";
import ScreenRouter from "./components/screens/ScreenRouter";
import SettingsModal from "./components/common/Settings/SettingsModal";
import FooterBar from "./components/common/FooterBar/FooterBar";
import "./styles/app-layout.css";

const AppContent = () => {
    const {
        appScreen,
        currentProject,
        isSettingsOpen,
        handleOpenProfile,
        handleOpenSettings,
        handleBackToProjects,
        setSettingsOpen,
        activeTab
    } = useApp();

    return (
        <Layout>
            <Header
                appScreen={appScreen}
                currentProject={currentProject}
                onBackToProjects={handleBackToProjects}
                onOpenProfile={handleOpenProfile}
                onOpenSettings={handleOpenSettings}
            />

            <ScreenRouter />

            {/* Footer только для редактора */}
            {appScreen === 'editor' && <FooterBar activeTab={activeTab} />}

            {isSettingsOpen && (
                <SettingsModal onClose={() => setSettingsOpen(false)} />
            )}
        </Layout>
    );
};

const App = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

export default App;