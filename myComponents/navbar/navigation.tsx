'use client'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Ghost } from 'lucide-react'
import {cn} from '@/lib/utils'
import  {usePathname} from 'next/navigation'

const it = [
  {
    name: 'Home',
    icon:'Homgo',
    href: '/'
  },

  {
    name: 'About',
    icon:'Aboutgo',
    href: '/about'
  },

  {
    name: 'Contact',
    icon:'Contactgo',
    href: '/contact'
  },

  {
    name: 'Sign in/Register',
    icon:'Sign in/Register',
    href: '/sign'
  }


]

{/* creat two array of object userlogged in and user not logged in
  chose which to use based on wether user logged in or not
*/}

export const Navigation = () => {
  const currentPath = usePathname()
  return (
    <div className="flex m-4">
      {it.map(item=>(
        <div key={item.name} className={cn("font-medium p-2 mr-10 items-center")}>
          <div ><Link href={item.href}>{item.icon}
          </Link></div></div>
      ))}
    </div>
  )
}

