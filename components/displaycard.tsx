import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from "next/link"
  import { Separator } from "@radix-ui/react-select"
  
  import React, { ReactNode } from 'react'
  import { cn } from "@/lib/utils"
  
  export const Displaycard = ({className,title,content,footer,link,description}:{
    className?:string,
    title:string,
    description?:string
    content?:ReactNode
    footer?:ReactNode,
    link:string,
    price:string,
    car_status:string,
    owner:string,
    engine_size:string,

  }) => {
    return (
    <Link href={link}>
      <Card className={cn("p-0 m-0 flex",className)}>
      <CardContent className="sm:p-2 p-0">
       {content}
      </CardContent>
      <CardHeader className="p-2"> 
      <CardTitle className="flex justify-center font-normal pb-2 border-b-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      </CardHeader>
      
    </Card></Link>
    )
  }
  
  