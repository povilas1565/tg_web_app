import { useEffect, useState } from "react";

export const useTelegram = () => {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    tg.setBackgroundColor("#020617");
    tg.setHeaderColor("#020617");

    setWebApp(tg);
  }, []);

  return { webApp };
};
