"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}





export function ThemeToggler() {
    const { setTheme, theme } = useTheme()
    const handleToggle = () => {
        if (theme === "system") {
            setTheme("dark")
        } else if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("system")
        }
    }
    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleToggle}
            className="relative"
        >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}