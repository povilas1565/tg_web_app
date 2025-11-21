
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';

const AppContext = createContext();

export const SCREENS = {
    HOME: 'home',
    VIDEO: 'video',
    CREATE_VIDEO: 'create-video',
    PROJECTS: 'projects',
    PROFILE: 'profile',
    EDITOR: 'editor',
    AVATARS: 'avatars'
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SCREEN':
            return { ...state, appScreen: action.payload };
        case 'SET_PROJECT':
            return { ...state, currentProject: action.payload };
        case 'SET_ACTIVE_TAB':
            return { ...state, activeTab: action.payload };
        case 'TOGGLE_SETTINGS':
            return { ...state, isSettingsOpen: action.payload };
        default:
            return state;
    }
};

const initialState = {
    appScreen: SCREENS.HOME,
    activeTab: 'script',
    currentProject: null,
    isSettingsOpen: false
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const { webApp } = useTelegram();

    useEffect(() => {
        if (!webApp) return;

        const mainButton = webApp.MainButton;
        const { appScreen, activeTab } = state;

        // Логика кнопки Telegram
        if (appScreen === SCREENS.PROJECTS) {
            mainButton.setText("Создать или открыть проект");
        } else if (appScreen === SCREENS.PROFILE) {
            mainButton.setText("Назад к проектам");
        } else if (appScreen === SCREENS.HOME) {
            mainButton.setText("К видео");
        } else if (appScreen === SCREENS.VIDEO) {
            mainButton.setText("Редактировать видео");
        } else if (appScreen === SCREENS.CREATE_VIDEO) {
            mainButton.setText("Создать видео");
        } else if (appScreen === SCREENS.EDITOR) {
            mainButton.setText("Сохранить проект");
        }

        mainButton.show();
        mainButton.enable();
        mainButton.color = "#4f46e5";
        mainButton.textColor = "#ffffff";

        const handleMainButtonClick = () => {
            webApp.HapticFeedback?.impactOccurred("medium");
            if (appScreen === SCREENS.PROJECTS) {
                handleOpenProject({
                    id: 999,
                    name: "New project",
                    duration: "0:30",
                    scenes: 1
                });
            } else if (appScreen === SCREENS.PROFILE) {
                handleBackToProjects();
            } else if (appScreen === SCREENS.HOME) {
                setScreen(SCREENS.VIDEO);
            } else if (appScreen === SCREENS.VIDEO) {
                setScreen(SCREENS.CREATE_VIDEO);
            } else if (appScreen === SCREENS.CREATE_VIDEO) {
                setScreen(SCREENS.EDITOR);
            } else {
                alert(`MainButton clicked in tab: ${activeTab}`);
            }
        };

        webApp.onEvent("mainButtonClicked", handleMainButtonClick);

        return () => {
            webApp.offEvent("mainButtonClicked", handleMainButtonClick);
        };
    }, [webApp, state.appScreen, state.activeTab]);

    const setScreen = (screen) => dispatch({ type: 'SET_SCREEN', payload: screen });
    const setProject = (project) => dispatch({ type: 'SET_PROJECT', payload: project });
    const setActiveTab = (tab) => dispatch({ type: 'SET_ACTIVE_TAB', payload: tab });
    const setSettingsOpen = (isOpen) => dispatch({ type: 'TOGGLE_SETTINGS', payload: isOpen });

    const handleOpenProject = (project) => {
        setProject(project || {
            id: Date.now(),
            name: "Новый проект",
            duration: "0:30",
            scenes: 1
        });
        setScreen(SCREENS.EDITOR);
    };

    const handleBackToProjects = () => {
        setScreen(SCREENS.PROJECTS);
    };

    const handleOpenProfile = () => {
        setScreen(SCREENS.PROFILE);
    };

    const handleOpenSettings = () => {
        setSettingsOpen(true);
    };

    const value = {
        ...state,
        setScreen,
        setProject,
        setActiveTab,
        setSettingsOpen,
        handleOpenProject,
        handleBackToProjects,
        handleOpenProfile,
        handleOpenSettings
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};