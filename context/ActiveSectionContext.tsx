'use client'

import React, {createContext, useState} from "react";
import {navLinks} from "@/lib/data";

export type SectionName = (typeof navLinks)[number]['name']

type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)


const ActiveSectionProvider = ({children}: { children: React.ReactNode }) => {

  const [activeSection, setActiveSection] = useState<SectionName>('Home')


  return (
    <ActiveSectionContext.Provider
      value={{activeSection, setActiveSection}}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionProvider