'use client'

import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Container from "@/components/Container";
import {GithubIcon, LinkedinIcon, TriangleIcon} from "lucide-react";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {techList} from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const component = useRef<HTMLElement>(null);

  const ref = useSectionInView('About')

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.aboutContainer',
          start: 'top 70%',
          end: 'bottom 80%',
          // markers: true,
          toggleActions: 'play none none none',
          // scrub: 4,
        },
        defaults: {
          ease: 'power3.out',
          duration: .3,
        }
      });

      tl
        .from('.header', {
            yPercent: 150,
            opacity: 0
          }
        )

        .from('.p', {
          yPercent: 150,
          opacity: 0,
          stagger: 0.3,
          delay: .2
        }, '<')

        .from('.btn', {
          y: 150,
          opacity: 0,
          rotate: -10,
          ease: 'elastic.out(1,0,3)',
          transformOrigin: 'left top',
          duration: 1,
          stagger: 0.3,
        }, '<=1')


    }, component);

    return () => ctx.revert();
  }, []);


  return (
    <Container
      id='about' ref={component} className='!h-auto '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 h-full place-items-center aboutContainer justify-between'>
        <div ref={ref}>
          <div className='overflow-hidden'>
            <Heading className='header' title={'About Me'} size='xl'/>
          </div>

          <div className='overflow-hidden'>

            <p className='mb-4 text-lg p'>I’m a web developer passionate about turning ideas into interactive,
              user-friendly digital experiences. I love combining creativity with code to build something
              meaningful.</p>
          </div>

          <div className='overflow-hidden'>

            <p className='text-lg mb-4 p'>What started as a curiosity quickly turned into a lifelong passion for solving
              problems and driving innovation. Every challenge is a chance to learn and grow.</p>
          </div>

          <div className='overflow-hidden'>
            <p className='text-lg mb-4 p'>Beyond coding, I stay curious, continuously exploring emerging technologies to
              refine my approach and deliver modern, future-proof solutions.</p>
          </div>

          <div className='overflow-hidden'>
            <p className='text-2xl font-semibold mb-2 p'>“Code for fun. Fun for code.”</p>
          </div>

          <div className='overflow-hidden mt-4'>
            <div className='p'>
              <Heading className='!mb-2 ' size='sm' title={'What I Use : '}/>
              <ul className='grid grid-cols-[repeat(2,minmax(120px,180px))] '>
                {techList.map((tech, idx) => (
                  <li key={tech + idx} className='flex items-center gap-x-2 text-lg'>
                    <TriangleIcon className='w-2 h-2 rotate-90'/>
                    <span>{tech}</span>
                  </li>
                ))}

              </ul>
            </div>
          </div>

          <div className='flex items-center gap-x-3 mt-10'>
            <Button target={'_blank'} download className='btn' text={'Resume'} href={'/pps.pdf'} iconBtn/>

            <div className='flex items-center gap-x-3 ml-8'>
              <a
                href="https://github.com/Paing4M"
                target='_blank'
                aria-label="Visit my GitHub profile"
                className='bg-text-color btn rounded-full border-secondary w-10 h-10 text-primary p-1 border-4 inline-block'>
                <GithubIcon className='w-full h-full'/>
              </a>
              <a
                href="https://www.linkedin.com/in/paing-pyae-soe"
                target='_blank'
                aria-label="Visit my LinkedIn profile"
                className='bg-text-color btn rounded-full border-secondary w-10 h-10 text-primary p-1 border-4 inline-block'>
                <LinkedinIcon className='w-full h-full'/>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          {/*<div className="relative w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full shadow-lg">*/}
          {/*  <img*/}
          {/*    src="/profile.jpg"*/}
          {/*    alt="Profile picture"*/}
          {/*    className="w-full h-full object-cover"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </Container>
  );
};

export default About;
