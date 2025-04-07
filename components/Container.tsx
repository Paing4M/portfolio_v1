import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType,
  children: React.ReactNode,
  ref?: React.Ref<HTMLElement>,
  className?: string,
  id?: string,
}

const Container = ({as: Comp = 'section', ref, className, children, id, ...restProps}: ContainerProps) => {
  return (
    <Comp
      id={id}
      ref={ref}
      {...restProps}
      className={`${className} px-4 py-10 md:px-6 md:py-14 lg:py-16 h-[calc(100vh-3.8rem)] md:mt-[1rem] scroll-mt-[3.8rem] md:scroll-mt-[4.8rem]`}
    >
      <div className='mx-auto w-full max-w-7xl h-full'>
        {children}
      </div>
    </Comp>
  )
}

export default Container
