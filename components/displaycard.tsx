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
  import { SlSpeedometer } from "react-icons/sl"
  import { ImLocation } from "react-icons/im"
  
  export const Displaycard = ({className,title,content,footer,link,description,mileage,price,location}:{
    className?:string,
    title:string,
    description?:string
    content?:ReactNode
    footer?:ReactNode,
    link:string,
    price:number,
    car_status:string,
    owner:string,
    engine_size:string,
    mileage:number,
    location:string
  

  }) => {
    const nf = new Intl.NumberFormat();
    return (
      <div className={cn("max-w-[300px]",className)}>
    <Link href={link}>
      <Card className={cn("p-0 m-0 flex flex-col")}>
      <CardContent className="sm:p-2 p-0">
      {content} 
      </CardContent>
   <CardHeader className="p-2"> 
      <CardTitle className="flex justify-center pb-2 border-b-2
      font-bold
      ">
        {title}
        </CardTitle>
        </CardHeader>
      <div className="ml-3">
        <h6><span className="inline-block mr-2"><SlSpeedometer /></span>{`${nf.format(mileage)} km`}</h6>
        <h6><span className="inline-block mr-2"><ImLocation /></span>{location}</h6>
     
      <div className="font-bold text-2xl ">{`\$${nf.format(price)}`}</div>
      <CardDescription>{description}</CardDescription>
       </div>
      
    </Card></Link>
    </div>
    )
  }
  
  