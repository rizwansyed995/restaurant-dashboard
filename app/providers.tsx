"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeAppProvider } from "@/context/theme-app-context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeAppProvider>
        {children}
      </ThemeAppProvider>
    </ThemeProvider>
  );
}
