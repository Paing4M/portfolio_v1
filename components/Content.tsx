'use client'

import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import {useEffect} from "react";
import useIsMounted from "@/hooks/useIsMounted";

const Content = () => {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted) return
  }, [isMounted])

  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}
export default Content
