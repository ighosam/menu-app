import React from 'react'
import { IoCarSport } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";
import { FaCarOn } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsSave2 } from "react-icons/bs";
import { cn } from '@/lib/utils'
import {Icons} from '@/components/svgs/logo'
import Link from 'next/link'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
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
import Post from './post';
import { buttonVariants } from '../ui/button';



const menu =[
  {
    title: 'Buy',
    id:"1",
    items:[
      {
        id:"1",
        option:'Used cars',
        icon: <IoCarSport className='w-5 h-5'/>,
        href:'/'
      },
      {
        id:"2",
        option:'New cars',
        icon: <FaCarOn className='w-5 h-5'/>,
        href:'/'
      },
      {
        id:"3",
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
        id:"1",
        option: 'Save searches',
        icon:<FiSearch className='w-5 h-5'/>,
        href:'/'

      },
      {
        id:"2",
        option: 'Save  cars',
        icon:<BsSave2 className='w-5 h-5'/>,
        href:'/'
      }
    ]
  }
]

const Mobile = () => {
  return (

    //===============================
     <div >
    <Sheet >

  <SheetTrigger ><Icons.logo className ="sm:hidden mr-3"/></SheetTrigger>
  <SheetContent className ="md:hidden mr-3" > 
  <SheetTitle>Menu</SheetTitle>
  <div className="flex flex-1 w-full max-w-10">
<NavigationMenu className="flex flex-col" >
  <NavigationMenuList >
<div className="flex flex-col min-h-full space-y-10">
  <div className="flex justify-center mt-8 w-[80%] space-x-16">
  <SheetTrigger ><div>Post</div></SheetTrigger >
  <SheetTrigger ><div className={cn(buttonVariants({variant: 'ghost'}),'bg-orange-500 hover:bg-orange-600 cursor-pointer text-white')}>Sign in/Register</div></SheetTrigger >
  </div>
   {
    menu.map(itm=>(
      <div key={itm.id}>
      
      <NavigationMenuItem >

      {itm.title}
        <div className="min-w-80 w-80 border-3 h-32 mx-auto flex">
        <div className="w-60 mx-auto mt-1 ">
        <div className="flex-1 flex flex-col min-h-20 space-y-5">
          {
            itm.items.map(opt=>(
              <Link href={opt.href} className=" hover:bg-gray-100 rounded-md space-y-40"
              key={opt.id}>
                 <NavigationMenuLink asChild><SheetTrigger >
                <div className="mb-3 flex pl-2 text-[16px]">
                <span className='mr-3 pt-1'>{opt.icon}</span>
                <span className="block pt-1">{opt.option}</span>
                </div>      
                </SheetTrigger ></NavigationMenuLink>
               </Link>  
            ))
          }
          </div>
          </div>
        </div>
      </NavigationMenuItem>
   </div> ))
   }
   </div>
  </NavigationMenuList>
</NavigationMenu>

    </div>

    <Post />
   
  </SheetContent>


  
 
</Sheet>
</div>
  )
}

export default Mobile