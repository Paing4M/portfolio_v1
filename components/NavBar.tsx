'use client'

import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import {navLinks} from "@/lib/data";
import React from "react";
import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import ThemeSwitch from "@/components/ThemeSwitch";


const Logo = () => {
  return (
    <Link href={'#home'} className='inline-block text-3xl font-extrabold tracking-[-.1rem]'>Paingpyaesoe</Link>
  )
}


const NavBar = () => {
  const {activeSection, setActiveSection} = useActiveSectionContext()


  return (
    <nav
      className='flex items-center justify-between h-full px-4 md:px-6 my-auto '>
      <Logo/>

      <ul className='hidden md:flex items-center gap-x-3 justify-between w-fit]'>

        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`px-2 py-1 text-lg font-semibold relative group block hover:text-btn-secondary ${activeSection === link.name ? 'text-btn-secondary' : ''}`}>
              <span>
                {link.name}
              </span>
            </Link>
          </li>
        ))}

        <ThemeSwitch/>
      </ul>

      <MobileNav/>

    </nav>
  )
}


export default NavBar
