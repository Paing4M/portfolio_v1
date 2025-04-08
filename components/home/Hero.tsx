'use client'

import {useLayoutEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "@/components/Button";
import Container from "@/components/Container";
import useSectionInView from "@/hooks/useSectionInView";

const NAME = 'paing pyae soe'


const Hero = () => {

  const component = useRef<HTMLTableSectionElement>(null)
  const imgContainer = useRef<HTMLDivElement>(null)

  const ref = useSectionInView('Home')


  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const textTl = gsap.timeline()

      textTl
        .fromTo('.name-animation', {
          y: 40,
          opacity: 0,
          skewX: 20,
        }, {
          y: 0,
          opacity: 1,
          skewX: 0,
          ease: 'power4.out',
          duration: 1,
          stagger: 0.02
        })

        .fromTo(['.job-title', '.p'], {
          opacity: 0,
          yPercent: 100,
        }, {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          ease: 'power4.out',
        }, '-=1')

        .fromTo('.btn', {
          y: 100,
          opacity: 0,
          rotate: -10,
        }, {
          y: 0,
          opacity: 1,
          rotate: 0,
          ease: 'elastic.out(1,0,3)',
          transformOrigin: 'left top',
          duration: 1,
        }, '<')


      const images = gsap.utils.toArray<HTMLImageElement>('.img')

      images.forEach(img => {

        gsap
          .to(img, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
          })
      })

      gsap.to('.main-img', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power4.inOut',
      })


      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / (imgContainer?.current?.offsetWidth ?? 0)) - 0.2
        const y = (e.clientY / (imgContainer?.current?.offsetHeight ?? 0)) - 0.2

        images.forEach((img, idx) => {
          const depth = (idx + 1) * 3;
          const moveX = x * depth * 2;
          const moveY = y * depth * 2;


          gsap.to(img, {
            x: moveX,
            y: moveY,
          })
        })
      }

      component?.current?.addEventListener('mousemove', handleMouseMove)

      return () => component?.current?.removeEventListener('mousemove', handleMouseMove)

    }, component)

    return () => ctx.revert()
  }, [])


  const renderName = () => {
    return (
      <>
        {NAME.split('').map((item, index) => (
          <span key={index}
                className={`name-animation-${item} name-animation inline-block  ${index} opacity-0 first:uppercase tracking-tight`}>
              {item}
          </span>)
        )}
      </>
    )
  }

  return (
    <Container id='home' ref={component}>
      <div
        ref={ref}
        className='w-full h-full place-items-center grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-0 grid-rows-2 md:grid-rows-1 '>
        <div ref={imgContainer} className='relative w-full h-full '>

          {/* solar system */}
          <div className='absolute w-[12rem] h-[12rem] md:w-[15em]  md:h-[15rem] left-[50%] top-[20%]'>
            <Image unoptimized priority width={100} height={100} src={'/hero/3.png'} alt={'earth'}
                   className='w-fit h-full object-contain scale-0 opacity-0 img   z-[5]'/>
          </div>

          <div className='absolute w-[4em] h-[4rem]  z-[8] left-[10%] md:left-[10%] top-[50%]'>
            <Image unoptimized priority width={100} height={100} src={'/hero/4.png'} alt={'hero-4'}
                   className='w-fit h-full object-contain scale-0 opacity-0 img  '/>
          </div>

          <div className='absolute w-[4rem] h-[4rem] z-[8] left-[15%] md:left-[30%] top-[2%] md:top-[10%]'>
            <Image unoptimized priority width={100} height={100} src={'/hero/2.png'} alt={'hero-2'}
                   className='w-fit h-full object-contain scale-0 opacity-0 img  '/>
          </div>

          <div className='absolute w-[3rem] h-[3rem] z-[8] right-[18%] md:right-[30%] top-[2%] md:top-[10%]'>
            <Image unoptimized priority width={100} height={100} src={'/hero/1.png'} alt={'hero-1'}
                   className='w-fit h-full object-contain scale-0 opacity-0 img  '/>
          </div>


          <div className='absolute w-[3rem] h-[3rem] z-[8] right-[25%] bottom-[25%]'>
            <Image unoptimized priority width={100} height={100} src={'/hero/5.png'} alt={'hero-5'}
                   className='w-fit h-full object-contain scale-0 opacity-0 img  '/>
          </div>

          <div className='absolute w-[3rem] h-[3rem] z-[8] left-[20%] top-[30%]'>
            <Image unoptimized priority width={100} height={100} src={'/hero/6.png'} alt={'hero-6'}
                   className='w-fit h-full object-contain scale-0 opacity-0 img  '/>
          </div>

          <div className='absolute w-[2rem] h-[2rem] z-[8] left-[25%] md:left-[30%] bottom-[10%] md:bottom-[30%]'>
            <Image unoptimized priority width={100} height={100} src={'/hero/7.png'} alt={'hero-7'}
                   className='w-fit h-full object-contain scale-0 opacity-0 img  '/>
          </div>

          {/* main */}
          <div
            className='absolute bottom-[-8%] sm:bottom-[-20%] md:bottom-[40%] left-[50%] w-[20rem]  h-[20rem]  translate-x-[-50%] md:translate-y-[40%] z-[5]'>
            <Image unoptimized
                   src={'/hero/main.png'}
                   alt={'main-img'}
                   width={200}
                   height={200}
                   priority
                   className={'object-contain w-full h-full main-img z-[6] scale-0 opacity-0'}
            />
          </div>
        </div>

        <div className=' col-start-1 md:row-start-1 h-fit w-full relative z-[8]'>
          <h1
            className='text-[clamp(2rem,13vmin,15rem)] font-extrabold leading-none tracking-tight mb-6 text-text-color'>
            <span className='block'>{renderName()}</span>
          </h1>

          <div className='w-fit h-fit overflow-hidden'>
            <span
              className='block job-title bg-gradient-to-tr from-btn-color via-btn-secondary to-btn-accent text-3xl bg-clip-text font-bold uppercase tracking-[.2rem] opacity-0 text-transparent'>
                  Web Developer
            </span>

            <span className='inline-block mt-4 p opacity-0'>A continuously learning web developer with a passion for staying up-to-date with the latest technologies. I enjoy tackling new challenges and crafting innovative web solutions.</span>

            <Button className='mt-4 btn opacity-0' text={'Contact'} iconBtn href={'#contact'}/>

          </div>
        </div>
      </div>
    </Container>
  )

}

export default Hero


