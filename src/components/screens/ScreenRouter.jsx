import React from 'react';
import { useApp, SCREENS } from '../../contexts/AppContext';
import HomeScreen from './Home/HomeScreen';
import VideoScreen from './Video/VideoScreen';
import CreateVideoScreen from './Video/CreateVideoScreen';
import ProjectsScreen from './Projects/ProjectsScreen';
import ProfileScreen from './Profile/ProfileScreen';
import AvatarsScreen from './Avatars/AvatarsScreen';
import EditorScreen from "./Editor/EditorScreen";


const ScreenRouter = () => {
    const { appScreen } = useApp();

    const screens = {
        [SCREENS.HOME]: <HomeScreen />,
        [SCREENS.VIDEO]: <VideoScreen />,
        [SCREENS.CREATE_VIDEO]: <CreateVideoScreen />,
        [SCREENS.PROJECTS]: <ProjectsScreen />,
        [SCREENS.PROFILE]: <ProfileScreen />,
        [SCREENS.AVATARS]: <AvatarsScreen />,
        [SCREENS.EDITOR]: <EditorScreen />
    };

    return screens[appScreen] || <HomeScreen />;
};

export default ScreenRouter;