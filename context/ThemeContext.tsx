'use client'

import {createContext, ReactNode, useEffect, useState} from "react";


type ThemeContextType = {
  theme: string,
  toggleTheme: () => void,

}

export const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider = ({children}: { children: ReactNode }) => {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }


  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider