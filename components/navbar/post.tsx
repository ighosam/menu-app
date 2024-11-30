import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { Ghost } from 'lucide-react'
import { cn } from '@/lib/utils'

const Post = () => {
  return (<>
    <Link href='/post'><div className='bg-slate-600 w-[75px] h-9 items-center md:flex justify-center rounded-md text-white hover:bg-slate-300 hover:text-black transition-all duration-200 mr-10 hidden md:blcok'>Post ad</div></Link></>
  )
}

export default Post