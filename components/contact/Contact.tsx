'use client'

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import useSectionInView from "@/hooks/useSectionInView";

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const sectionRef = useSectionInView('Contact')

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          // markers: true,
          start: 'top 60%',
          end: 'center bottom',
        },
        defaults: {
          ease: 'power3.out',
          duration: .4,
        }
      })

      tl
        .from('.header', {
          yPercent: 150
        })

        .from('.text', {
          yPercent: 150,
          stagger: 0.1,
        }, '<=.3')

        .from('.btn', {
          y: 150,
          opacity: 0,
          rotate: -10,
          ease: 'elastic.out(1,0,3)',
          transformOrigin: 'left top',
          duration: .8,
        })


    }, ref)

    return () => ctx.revert()
  }, []);


  return (
    <Container ref={ref} id='contact'>
      <div ref={sectionRef} className='flex flex-col justify-center h-full'>
        <div className='overflow-hidden'>
          <Heading title='Contact' size='xl' className='header'/>
        </div>

        <div className='overflow-hidden'>
          <Heading className='!mb-4 text' size='sm' title={'Let\'s Build Something Great Together'}/>
        </div>

        <div className='overflow-hidden'>
          <p className='text'>
            I&apos;m always open to new opportunities
            , collaborations, and exciting projects.
          </p>
        </div>
        <div className='overflow-hidden'>
          <p className='text'>
            Whether you have a project idea,
            a question, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className='mt-10'>
          <Button rel="noopener noreferrer" className='btn' text={'Contact Me'}
                  href={'mailto:paing1929@gmail.com?subject=Hello%20There'}
                  iconBtn/>
        </div>
      </div>
    </Container>
  )
}
export default Contact
