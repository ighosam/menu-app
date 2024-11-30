'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { IoCarSport } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";
import { FaCarOn } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsSave2 } from "react-icons/bs";
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const menu =[
  {
    title: 'Buy',
    id:"1",
    items:[
      {
        id:'1',
        option:'Used cars',
        icon: <IoCarSport className='w-5 h-5'/>,
        href:'/'
      },
      {
        id:'2',
        option:'New cars',
        icon: <FaCarOn className='w-5 h-5'/>,
        href:'/'
      },
      {
        id:'3',
        option:'Certified cars',
        icon: <PiCertificateBold className='w-5 h-5'/>,
        href:'/'
      }
    ],
  },

  {
    title: 'Saved',
    id:"2",
    items:[
      {
        id:'1',
        option: 'Save searches',
        icon:<FiSearch className='w-5 h-5'/>,
        href:'/'

      },
      {
        id:'2',
        option: 'Save  cars',
        icon:<BsSave2 className='w-5 h-5'/>,
        href:'/'
      }
    ]
  }
]


const Navigation_menu = () => {
  return (
    <div className="flex m-4">
<NavigationMenu>
  <NavigationMenuList>

   {
    menu.map(itm=>{
      return(
      <NavigationMenuItem className="hidden md:block" key={itm.id}>
        <NavigationMenuTrigger className="text-[16px] font-normal">{itm.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="min-w-80 w-80 border-3 h-32 mx-auto flex ">
        <div className="w-60 mx-auto mt-1">
        <div className="flex-1  flex-col min-h-10">
          {
            itm.items.map(opt=>(
              
              
              <Link href={opt.href} className="rounded-md" key={opt.id}>
                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="mb-3 flex pl-2 text-[16px]">
                <span className='mr-3 pt-1'>{opt.icon}</span>
                <span className="block pt-1">{opt.option}</span>
              
                </div>      
                </NavigationMenuLink>
               </Link>
            ))
          }
          </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>)
    })
   }

    <NavigationMenuItem className="hidden md:block">
  <Link href="/post" legacyBehavior passHref>
    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),'text-[16px] font-normal')}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>

    </div>
  )
}

export default Navigation_menu