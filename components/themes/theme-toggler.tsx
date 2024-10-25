"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggler({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="w-full flex items-center justify-start border-0 p-2 gap-2"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className=" rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100 animate-fade-in dark:animate-fade-out" />
      <Moon className="absolute  rotate-0 scale-100 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0 animate-fade-out dark:animate-fade-in" />
      {children}
    </Button>
  );
}
