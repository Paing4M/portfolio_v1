'use client'

import React, {useLayoutEffect, useRef} from 'react';
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import {techs} from "@/lib/data";
import {DotIcon} from "lucide-react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: 'top bottom',
          end: 'bottom top',
          // markers: true,
          scrub: 4,
        }
      })

      tl.fromTo('.tech-row', {
        x: (index) => {
          return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)
        }
      }, {
        x: (index) => {
          return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
        },
        ease: 'power1.inOut'
      })

    }, component)

    return () => ctx.revert()
  }, []);


  return (
    <section ref={component} className='overflow-hidden'>
      <div className='tech_container w-full h-full'>
        <Container as={'div'} className='!h-fit !py-0 !w-full'>
          <Heading title={'What I use'} size={'xl'}/>
        </Container>
        {techs.map((tech) => (
          <div key={tech.name}
               className="tech-row flex items-center justify-center gap-4 text-slate-700 ">
            {
              Array.from({length: 15}, (_, idx) => (
                <div key={idx} className='flex items-center'>
                    <span
                      style={{
                        color: idx === 7 && tech.color ? tech.color : 'inherit',
                      }}

                      className='text-7xl sm:text-8xl tracking-tighter font-extrabold '>{tech.name}</span>


                  <DotIcon size={120}/>


                </div>
              ))
            }
          </div>
        ))}
      </div>
    </section>
  )
}
export default TechStack
