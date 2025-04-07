import React from "react";

const BgBlur = () => {
  return (
    <div>
      <div
        className='w-[35%] opacity-80 blur-[10rem] h-[15rem] md:h-[20rem] rounded-full absolute top-0 left-0 bg-blur-primary'/>
      <div
        className='w-[35%] opacity-80 blur-[10rem] h-[15rem] md:h-[20rem] rounded-full absolute top-0 left-1/2 -translate-x-1/2 bg-blur-secondary'/>
      <div
        className='w-[35%] opacity-80 blur-[10rem] h-[15rem] md:h-[20rem] rounded-full absolute top-0 right-0 bg-blur-accent'/>

    </div>
  )
}
export default BgBlur
