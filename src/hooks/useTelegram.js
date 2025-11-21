import { useEffect, useState } from "react";

export const useTelegram = () => {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) {
      console.warn('Telegram WebApp not found');
      return;
    }

    tg.ready();
    tg.expand();
    tg.setBackgroundColor('#020617');
    tg.setHeaderColor('#020617');
    tg.enableClosingConfirmation();

    setWebApp(tg);

    return () => {
      tg.disableClosingConfirmation();
    };
  }, []);

  return { webApp };
};
