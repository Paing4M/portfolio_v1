import Link from "next/link";
import React from "react";
import {ArrowUpRightIcon} from "lucide-react";

type ButtonProps = {
  text: string
  iconBtn?: boolean
  className?: string
  href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Button = ({text, iconBtn, className, href, ...props}: ButtonProps) => {
  return (
    <Link {...props} href={href}
          className={`${className}  group relative px-6 py-2 rounded-md border-2 inline-block overflow-hidden`}>
      <span
        className='absolute inset-0 z-0 h-full translate-y-9 bg-accent transition-transform duration-200 ease-in-out group-hover:translate-y-0 '/>
      <span className='text-text-color relative flex items-center gap-2 justify-center  text-md '>

        {text} {iconBtn && <ArrowUpRightIcon className='w-5 h-5 rotate-[10deg]'/>}

      </span>

    </Link>
  )
}

export default Button
