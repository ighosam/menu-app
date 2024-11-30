'use client'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Ghost } from 'lucide-react'
import {cn} from '@/lib/utils'
import  {usePathname} from 'next/navigation'

const it = [
  {
    name: 'Buy',
    icon:'Sign in/Register',
    href: '/sign'
  },
  {
    name: 'Research',
    icon:'Aboutgo',
    href: '/about'
  },
  {
    name: 'Saved',
    icon:'Contactgo',
    href: '/contact'
  },

]

{/* creat two array of object userlogged in and user not logged in
  chose which to use based on wether user logged in or not
*/}

export const Navigation = () => {
  const currentPath = usePathname()
  return (
    <div className="flex m-4">
      {it.map(item=>(
        <div key={item.name} className={cn("text-base/6 p-2 mr-10 items-center",currentPath==item.href && 'text-red-900')}>
          <div> <Link href={item.href}>{item.name}
          </Link></div> 
          <div className={cn("border-b-[2px] border-green-700 w-0 h-0 text-xl",currentPath==item.href && 'w-full duration-75')}></div>  
          </div>
      ))}
    </div>
  )
}

