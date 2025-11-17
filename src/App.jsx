import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout.jsx";
import Header from "./components/Header/Header.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import PreviewColumn from "./components/PreviewColumn/PreviewColumn.jsx";
import RightColumn from "./components/RightColumn/RightColumn.jsx";
import FooterBar from "./components/FooterBar/FooterBar.jsx";
import ProjectsScreen from "./components/Projects/ProjectsScreen.jsx";
import ProfileScreen from "./components/Profile/ProfileScreen.jsx";
import SettingsModal from "./components/Settings/SettingsModal.jsx";
import "./styles/app-layout.css";
import { useTelegram } from "./telegram/useTelegram.js";

const App = () => {
  // appScreen: 'projects' | 'editor' | 'profile'
  const [appScreen, setAppScreen] = useState("projects");
  const [activeTab, setActiveTab] = useState("script"); // script | avatar | templates
  const [currentProject, setCurrentProject] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { webApp } = useTelegram();

  useEffect(() => {
    if (!webApp) return;
    const mainButton = webApp.MainButton;

    if (appScreen === "projects") {
      mainButton.setText("Create or open project");
    } else if (appScreen === "profile") {
      mainButton.setText("Back to projects");
    } else {
      if (activeTab === "script") {
        mainButton.setText("Generate video");
      } else if (activeTab === "avatar") {
        mainButton.setText("Save avatar & continue");
      } else {
        mainButton.setText("Use selected template");
      }
    }

    mainButton.show();
    mainButton.enable();
    mainButton.color = "#4f46e5";
    mainButton.textColor = "#ffffff";

    const handleMainButtonClick = () => {
      webApp.HapticFeedback?.impactOccurred("medium");
      if (appScreen === "projects") {
        setCurrentProject({
          id: 999,
          name: "New project",
          duration: "0:30",
          scenes: 1
        });
        setAppScreen("editor");
      } else if (appScreen === "profile") {
        setAppScreen("projects");
      } else {
        alert(`MainButton clicked in tab: ${activeTab}`);
      }
    };

    webApp.onEvent("mainButtonClicked", handleMainButtonClick);

    return () => {
      webApp.offEvent("mainButtonClicked", handleMainButtonClick);
    };
  }, [webApp, appScreen, activeTab]);

  const handleOpenProject = (project) => {
    setCurrentProject(project || {
      id: 999,
      name: "New project",
      duration: "0:30",
      scenes: 1
    });
    setAppScreen("editor");
  };

  const handleBackToProjects = () => {
    setAppScreen("projects");
  };

  const handleOpenProfile = () => {
    setAppScreen("profile");
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  return (
    <Layout>
      <Header
        appScreen={appScreen}
        currentProject={currentProject}
        onBackToProjects={handleBackToProjects}
        onOpenProfile={handleOpenProfile}
        onOpenSettings={handleOpenSettings}
      />

      {appScreen === "projects" && (
        <ProjectsScreen onOpenProject={handleOpenProject} />
      )}

      {appScreen === "profile" && <ProfileScreen />}

      {appScreen === "editor" && (
        <>
          <Tabs activeTab={activeTab} onChange={setActiveTab} />
          <main className="app-main-grid">
            <PreviewColumn activeTab={activeTab} />
            <RightColumn activeTab={activeTab} />
          </main>
          <FooterBar activeTab={activeTab} />
        </>
      )}

      {isSettingsOpen && (
        <SettingsModal onClose={() => setIsSettingsOpen(false)} />
      )}
    </Layout>
  );
};

export default App;
