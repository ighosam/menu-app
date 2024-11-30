'use client'
import React,{useEffect} from 'react'
import { Logo } from './logo'
import { Navigation} from './navigation'
import { Sign } from './sign'
import Post from './post'
import {Icons} from '@/components/svgs/logo'
import { cn } from '@/lib/utils'
import Wrapper from '@/components/maxWidthWrapper/wrapper'
import Navigation_menu from './navigationMenu'
import {Trophy} from '@/components/svgs/'
import Link from 'next/link'
import Cash from '@/components/svgs/Cash.svg'
import { handler } from 'tailwindcss-animate'
import Mobile from './mobile'



const Navbar = ({className}:{className?:string}) => {
  
  return (
    <section className="bg-background top-0 border-b-2 border-border">
<Wrapper>
  <div className={cn('flex justify-between items-center',className)}>
   <Link href="/"> <Cash className="w-16 h-16 text-muted-foreground ml-3 md:ml-0" /></Link>
    <Navigation_menu />
    <div className="flex justify-end">
      <Post />
      <Sign />
      <Mobile />


  


      
    </div>
    
    </div>
</Wrapper>

    </section>
    
  )
}

export default Navbar