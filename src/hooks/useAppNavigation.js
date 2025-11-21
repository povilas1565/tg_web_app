import { useApp, SCREENS } from '../contexts/AppContext';

export const useAppNavigation = () => {
    const { setScreen, setProject } = useApp();

    const navigateTo = {
        home: () => setScreen(SCREENS.HOME),
        video: () => setScreen(SCREENS.VIDEO),
        createVideo: () => setScreen(SCREENS.CREATE_VIDEO),
        projects: () => setScreen(SCREENS.PROJECTS),
        profile: () => setScreen(SCREENS.PROFILE),
        avatars: () => setScreen(SCREENS.AVATARS),
        editor: (project = null) => {
            setProject(project);
            setScreen(SCREENS.EDITOR);
        }
    };

    return navigateTo;
};