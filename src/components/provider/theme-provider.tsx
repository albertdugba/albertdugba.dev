"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Sets `data-theme` on <html> before paint (no flash), follows the system
 * setting by default, and remembers a manual choice.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute='data-theme' defaultTheme='system' enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
