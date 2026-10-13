"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is only known on the client; render a placeholder until mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className='flex size-8 items-center justify-center rounded-full text-gray transition-colors hover:text-lighter-gray'
    >
      {mounted ? (
        isDark ? <Sun className='size-4' /> : <Moon className='size-4' />
      ) : (
        <span className='size-4' />
      )}
    </button>
  );
}
