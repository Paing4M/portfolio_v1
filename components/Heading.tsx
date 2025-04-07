type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string,
  size?: 'xl' | 'md' | 'sm',
  className?: string,
}

const Heading = ({title, size = 'md', as: Comp = 'h1', className}: HeadingProps) => {
  return (
    <Comp
      className={`${className} tracking-wider font-semibold mb-10 capitalize 
      ${size === 'xl' && 'text-7xl md:text-8xl'}
       ${size === 'md' && 'text-5xl md:text-6xl'} 
       ${size === 'sm' && 'text-3xl md:text-4xl'}
      `}>
      {title}
    </Comp>
  )
}

export default Heading
