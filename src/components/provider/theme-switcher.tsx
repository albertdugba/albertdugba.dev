"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-md hover:bg-[var(--lighterGray)] transition-all duration-200'
      style={{ color: "var(--gray)" }}
      aria-label='Toggle theme'
    >
      {theme === "dark" ? (
        <Sun className='h-5 w-5' />
      ) : (
        <Moon className='h-5 w-5' />
      )}
    </button>
  );
}
