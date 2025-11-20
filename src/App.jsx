import Tabs from "./components/Tabs/Tabs.jsx";
import PreviewColumn from "./components/PreviewColumn/PreviewColumn.jsx";
import RightColumn from "./components/RightColumn/RightColumn.jsx";
import FooterBar from "./components/FooterBar/FooterBar.jsx";
import ProjectsScreen from "./components/Projects/ProjectsScreen.jsx";
import ProfileScreen from "./components/Profile/ProfileScreen.jsx";
import SettingsModal from "./components/Settings/SettingsModal.jsx";
import HomeScreen from "./components/Home/HomeScreen.jsx";  // Добавлен HomeScreen
import VideoScreen from "./components/Video/VideoScreen.jsx";  // Добавлен VideoScreen
import CreateVideoScreen from "./components/Video/CreateVideoScreen.jsx";  // Добавлен CreateVideoScreen
import "./styles/app-layout.css";
import { useTelegram } from "./telegram/useTelegram.js";
import {useEffect, useState} from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";

const App = () => {
  // appScreen: 'projects' | 'editor' | 'profile' | 'home' | 'video' | 'create-video'
  const [appScreen, setAppScreen] = useState("home");  // Установили начальный экран как home
  const [activeTab, setActiveTab] = useState("script"); // script | avatar | templates
  const [currentProject, setCurrentProject] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { webApp } = useTelegram();

  useEffect(() => {
    if (!webApp) return;
    const mainButton = webApp.MainButton;

    // Логика для отображения текста в кнопке
    if (appScreen === "projects") {
      mainButton.setText("Создать или открыть проект");
    } else if (appScreen === "profile") {
      mainButton.setText("Назад к проектам");
    } else if (appScreen === "home") {
      mainButton.setText("К видео");
    } else if (appScreen === "video") {
      mainButton.setText("Редактировать видео");
    } else if (appScreen === "create-video") {
      mainButton.setText("Создать видео");
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
      } else if (appScreen === "home") {
        setAppScreen("video");
      } else if (appScreen === "video") {
        setAppScreen("create-video");
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
      name: "Новый проект",
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

        {/* Рендерим экран в зависимости от состояния appScreen */}
        {appScreen === "home" && <HomeScreen />}
        {appScreen === "video" && <VideoScreen />}
        {appScreen === "create-video" && <CreateVideoScreen />}
        {appScreen === "projects" && <ProjectsScreen onOpenProject={handleOpenProject} />}
        {appScreen === "profile" && <ProfileScreen />}

        {/* Экран редактора */}
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

