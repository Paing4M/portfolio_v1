'use client'

import Image from "next/image";
import {GithubIcon, LinkIcon} from "lucide-react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  className?: string;
  ref?: React.Ref<any>,
  project: {
    name: string;
    techs: string[];
    github: string;
    demo: string | null;
    image: string;
    desc?: string;
  };
  order?: "left" | "right";
}

const ProjectCard = ({className, order = "left", project, ref}: ProjectCardProps) => {


  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden grid grid-cols-6 ${className} overflow-hidden card mb-10 last-of-type:mb-0`}
    >
      {/* content */}
      <div
        className={`content p-3 opacity-0 row-start-1 row-end-2 z-[1] place-content-center ${order === 'right' ?
          'md:col-start-4 md:col-end-7' : 'md:col-start-1 md:col-end-4'}
          col-start-1 col-end-7 light:text-gray-300 md:light:text-text-color 
          `}
        // style={{
        //   gridColumn: order === 'right' ? '4 / 7' : '1 / 4',
        //   gridRow: '1 / 2',
        //   zIndex: '1',
        //   placeContent: 'center',
        // }}
      >

        <h2
          className={`text-5xl font-semibold mb-4 ${order === 'right' ? "md:text-right" : "text-left"}`}>{project.name}</h2>

        <h4
          className={`text-3xl mb-4 font-semibold ${order === 'right' ? "md:text-right" : "text-left"}`}>{project.techs.join(', ')}</h4>


        <p
          className={`md:my-6 p-0 md:p-6 md:shadow-sm md:shadow-primary text-md rounded-none md:rounded bg-transparent md:bg-secondary/90 `}>
          {project.desc}
        </p>

        <div className={`mt-4 flex gap-x-4 ${order === 'right' ? 'md:justify-end' : 'justify-start'}`}>
          <a target='_blank' href={project.github}>
            <GithubIcon className='w-[1.5rem] h-[1.5rem]'/>
          </a>

          {project.demo && (
            <a target='_blank' href={project.demo}>
              <LinkIcon className='w-[1.5rem] h-[1.5rem]'/>
            </a>
          )}
        </div>

      </div>

      {/* image */}
      <div
        // style={{
        //   gridColumn: order === 'right' ? '1 / 5' : '3 / 7',
        //   gridRow: '1 / 2',
        // }}
        className={`image w-full row-start-1 relative row-end-2 col-start-1 col-end-7 
          ${order === 'right' ? 'md:col-start-1 md:col-end-5' : 'md:col-start-3 md:col-end-7'}
        `}
      >
        <div className='absolute inset-0 bg-black/60 md:bg-black/20 rounded-lg'/>

        <Image unoptimized priority src={project.image} alt={project.name} width={200} height={200}
               className='w-full rounded-lg h-full'/>

      </div>
    </div>
  );
};

export default ProjectCard;

// desc
// ${order === 'right' ? 'md:text-right' : 'text-left'}