import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import {SectionName} from "@/context/ActiveSectionContext";

const useSectionInView = (sectionName: SectionName, threshold: number = 0.3) => {
  const {setActiveSection} = useActiveSectionContext()

  const {ref, inView} = useInView({
    threshold,
  })


  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setActiveSection(sectionName);
      }, 100);
    }
  }, [inView, setActiveSection, sectionName]);


  return ref
}

export default useSectionInView