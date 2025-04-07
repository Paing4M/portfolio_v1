'use client'

import NavBar from "@/components/NavBar";
import useTheme from "@/hooks/useTheme";


const Header = () => {
  const {theme} = useTheme()

  console.log({theme})


  return (
    <header
      className="sticky header top-0 z-50 mx-auto h-[3.8rem] w-full max-w-7xl backdrop-blur-[1rem] rounded-lg shadow-sm shadow-[#FFF2F2]/50 light:shadow-[#021526]/50  transition-all md:top-4 "
    >
      <NavBar/>
    </header>
  );
};

export default Header;


// border-1 border-[#FFF2F2]/20 light:border-[#021526]/20