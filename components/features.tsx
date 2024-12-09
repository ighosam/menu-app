import React from 'react'
import Carcard from './carcard'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const qsearch= [
  {
    title:"Wagon",
    img:<img src='../mycar3.png' className="hover:scale-105  w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'

  },
  {
    title:"Truck",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'

  },
  {
    title:"Minivan",
    img:<img src='../mycar3.png' className="hover:scale-105  w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'


  },
  {
    title:"Sedan",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'


  },
  {
    title:"SUV / Crossover",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'

  },
  {
    title:"Coupe",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'

  },
  {
    title:"Convertable",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'

  },
  {
    title:"Hatchback",
    img:<img src='../mycar3.png'className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/'

  },
]

const Features = () => {
  return (
   <div className="xl:mx-[180px] flex flex-col justify-items-center mt-10">
    <h2 className="text-2xl mb-1 p-1">Quick search:</h2>
    <h1 className="pl-[55px] text-muted-foreground sm:pl-[68px] ">Browse by energy source</h1>
    <div className="flex flex-wrap justify-center mt-5 gap-5">
       {
        qsearch.map(qs=>(
         
           <Carcard title={qs.title} content={qs.img} link={qs.link}
           className="text-wrap"
           key={qs.title}/>
        ))
       }   
    </div>
    </div>
  )
}

export default Features