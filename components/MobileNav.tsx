'use client'

import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import Link from "next/link";
import {navLinks} from "@/lib/data";
import {MenuIcon} from "lucide-react";
import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import ThemeSwitch from "@/components/ThemeSwitch";

const MobileNav = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLSpanElement>(null);

  const {activeSection, setActiveSection} = useActiveSectionContext()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const navTl = gsap.timeline({
        paused: true,
        defaults: {
          duration: .3,
          ease: 'power3.inOut',
        },
      });

      navTl
        .to(".menuContainer", {
          width: "10rem",
          height: "auto"
        })
        .from('.link', {
          opacity: 0,
          y: 20,
          stagger: 0.1,
        }, '<')


      let isPlayed = false;

      const handleMenu = () => {
        console.log('ha')

        if (isPlayed) {
          navTl.reverse();
          isPlayed = false;
        } else {
          navTl.play();
          isPlayed = true;
        }
      };

      console.log(menuRef)


      menuRef?.current?.addEventListener("click", handleMenu);

      return () => menuRef?.current?.removeEventListener("click", handleMenu);
    }, componentRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={componentRef} className='md:hidden fixed top-4 right-4'>

      <div
        className='menuContainer px-3 py-1 rounded-lg bg-text-color font-semibold text-primary w-12 h-[2rem] overflow-hidden'>
        <div className='flex items-center justify-end'>
          <span ref={menuRef}
                className='inline-block text-right cursor-pointer w-fit'>
            <MenuIcon className='w-6 h-6 ml-auto '/>
          </span>
        </div>

        {/* links */}
        <ul className='my-3 space-y-2 linkContainer '>
          {navLinks.map((link, i) => (
            <li key={link.name + i}
                onClick={() => setActiveSection(link.name)}
                className={`link text-lg  ${activeSection === link.name ? 'text-btn-secondary' : ''}`}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}

          <ThemeSwitch className={'link'}/>

        </ul>
      </div>

    </div>
  )
};

export default MobileNav;