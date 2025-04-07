'use client'

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import {projects} from "@/lib/data";
import ProjectCard from "@/components/projects/ProjectCard";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import useSectionInView from "@/hooks/useSectionInView";

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const ref = useSectionInView('Projects', 0.1)

  const component = useRef(null)
  const itemsRef = useRef<Array<HTMLElement | null>>([]);


  useLayoutEffect(() => {
    if (!component.current || itemsRef.current.length <= 0) return;

    const items = gsap.utils.toArray(itemsRef.current) as HTMLElement[];

    if (!items.length) return;

    const ctx = gsap.context(() => {

      gsap.from('.header', {
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        duration: .3,
        scrollTrigger: {
          trigger: component.current,
          start: 'top 70%',
          end: 'center bottom',
        }
      })

      items.forEach((item, idx) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=20%",
            end: "bottom center",
            toggleActions: "play none none none",
            // markers: true,
          },
          defaults: {
            ease: "power3.out",
            duration: 0.5,
            stagger: {
              each: 0.15,
              ease: "power3.out"
            },
          },
        });

        tl
          .from(item.querySelector(".image"),
            {
              scale: 0,
              opacity: 0,
              transformOrigin: "center"
            })

          .from(item.querySelector(".content"), {
            opacity: 0,
            yPercent: 20
          }, '<=.3');
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <Container ref={ref} id='projects' className='!h-auto'>
      <div className='w-full h-full' ref={component}>
        <div className='overflow-hidden'>
          <Heading className='header'
                   title={'Projects'} size={'xl'}/>
        </div>

        {projects.map((project, idx) => (
          <ProjectCard
            ref={(el: any) => (itemsRef.current[idx] = el)}
            order={idx % 2 === 0 ? 'right' : 'left'}
            project={project}
            key={idx + project.name}
          />
        ))}

      </div>

    </Container>
  )
}
export default Projects
