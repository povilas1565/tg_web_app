export const SCREENS = {
    HOME: 'home',
    VIDEO: 'video',
    CREATE_VIDEO: 'create-video',
    PROJECTS: 'projects',
    PROFILE: 'profile',
    EDITOR: 'editor',
    AVATARS: 'avatars'
};

export const SUBSCRIPTION_PLANS = {
    PREMIUM: {
        name: 'Premium',
        price: '3.00 ₽',
        description: 'Самая выгодная подписка',
        features: [
            'Неограниченное создание видео',
            'Экспорт в 1080р, до 30 минут видео'
        ]
    },
    FREEMIUM: {
        name: 'Freemium',
        price: '1.00 ₽',
        features: []
    },
    BASIC: {
        name: 'Basic',
        price: '2.00 ₽',
        features: []
    }
};

export const TAB_LABELS = {
    script: {
        title: "Новое аватар-видео",
        subtitle: "~ 0:30 · 1 кредит использован"
    },
    avatar: {
        title: "Настройка аватара",
        subtitle: "Выберите или загрузите аватар, затем продолжить"
    },
    templates: {
        title: "Выберите шаблон",
        subtitle: "Настройки шаблона будут применены к этому проекту"
    }
};

export const MOCK_PROJECTS = [
    {
        id: 1,
        name: "Вступительное видео",
        updated: "5 минут назад",
        duration: "0:32",
        scenes: 3
    },
    {
        id: 2,
        name: "Добро пожаловать в Telegram",
        updated: "Вчера",
        duration: "0:15",
        scenes: 1
    },
    {
        id: 3,
        name: "Объяснение продукта",
        updated: "2 дня назад",
        duration: "1:05",
        scenes: 5
    }
];