'use client'

import React from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import useTheme from "@/hooks/useTheme";

type ThemeSwitchProps = {
  as?: React.ElementType,
  className?: string;
}

const ThemeSwitch = ({as: Comp = 'li', className}: ThemeSwitchProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Comp onClick={toggleTheme}
          className={`rounded-full w-fit bg-primary p-1 cursor-pointer text-text-color ${className}`}>
      {theme === 'light' ? (
        <MoonIcon className='w-5 h-5 '/>
      ) : (
        <SunIcon className='w-5 h-5 '/>
      )}
    </Comp>
  )
}
export default ThemeSwitch
