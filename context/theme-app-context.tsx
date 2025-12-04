"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

type AppTheme = "light" | "dark";

interface ThemeAppContextProps {
  appTheme: AppTheme;
  setAppTheme: (theme: AppTheme) => void;
}

const ThemeAppContext = createContext<ThemeAppContextProps | undefined>(undefined);

export function ThemeAppProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme(); // from next-themes
  const [appTheme, setAppTheme] = useState<AppTheme>("light");

  // Sync next-themes -> context
  useEffect(() => {
    if (theme === "dark") setAppTheme("dark");
    else setAppTheme("light");
  }, [theme]);

  // Sync context -> next-themes when manually changed
  const handleSetAppTheme = (newTheme: AppTheme) => {
    setAppTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeAppContext.Provider value={{ appTheme, setAppTheme: handleSetAppTheme }}>
      {children}
    </ThemeAppContext.Provider>
  );
}

export function useAppTheme() {
  const ctx = useContext(ThemeAppContext);
  if (!ctx) throw new Error("useAppTheme must be used inside ThemeAppProvider");
  return ctx;
}
