export const createNewProject = () => ({
    id: Date.now(),
    name: "Новый проект",
    duration: "0:30",
    scenes: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
});

export const formatProjectDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'только что';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} минут назад`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} часов назад`;
    return `${Math.floor(diffInSeconds / 86400)} дней назад`;
};