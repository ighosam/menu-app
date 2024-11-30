import React from 'react'
import { Logo } from './logo'
import { Navigation} from './navigation'
import { Sign } from './sign'
import { cn } from '@/lib/utils'


const Navbar = ({className}:{className?:string}) => {
  return (
    <div className={cn('flex justify-between items-center',className)}>
    <Logo />
    <Navigation />
    <Sign />
    </div>
  )
}

export default Navbar