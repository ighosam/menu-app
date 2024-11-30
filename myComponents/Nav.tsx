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

const Nav = () => {
  const currentPath = usePathname()
  return (
    <div className="flex m-4">
      {it.map(item=>(
        <div key={item.name} className={cn("font-medium text-2xl mr-10 bg-green-800 rounded-lg items-center")}>
          <div className={cn("w-full",currentPath === item.href ? buttonVariants({variant:'secondary'}):buttonVariants({variant:'ghost'}))}><Link href={item.href}>{item.icon}
          </Link></div></div>
      ))}
    </div>
  )
}

export default Nav