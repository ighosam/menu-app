import React from 'react'
import Carcard from './carcard'
import { Displaycard } from './displaycard'
import Link from 'next/link'
import { cn } from '@/lib/utils'

//This will perfom a search to the backend and display result. similar to searchform.

const qsearch= [
  {
    title:"Toyota Corrola 1999 AWD",
    img:<img src='../mycar3.png' className="hover:scale-105  w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:60000,
    car_status:'sold',
    owner:'dealer',
    engine_size: '4 cylinder',
    details:'More details about this vehicle',
    mileage: 20000,
    location:'Toronto, ON'

  },
  {
    title:"Toyota Venza 2014 AWD",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:21000,
    car_status:'sold',
    owner:'dealer',
    engine_size: '4 cylinder',
    details:'More details about this vehicle',
    mileage: 30000,
    location:'Toronto, ON'
    

  },
  {
    title:"Toyota Hylander 2021 4X4",
    img:<img src='../mycar3.png' className="hover:scale-105  w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:48000,
    car_status:'sold',
    owner:'dealer',
    engine_size: '6 cylinder',
    details:'More details about this vehicle',
    mileage: 30000,
    location:'Toronto, ON'

  },
  {
    title:"Acura Legend 1991 FWD",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:12000,
    car_status:'active',
    owner:'dealer',
    engine_size: '4 cylinder',
    details:'More details about this vehicle',
    mileage: 30000,
    location:'Toronto, ON'


  },
  {
    title:"Telsla model y 2023 FWD",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:76000.00,
    car_status:'active',
    owner:'dealer',
    engine_size: '4 cylinder',
    details:'More details about this vehicle',
    mileage: 30000,
    location:'Toronto, ON'

  },
  {
    title:"Dodge Caravan FWD",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:7000,
    car_status:'sold',
    owner:'dealer',
    engine_size: '6 cylinder',
    details:'More details about this vehicle',
    mileage: 30000,
    location:'Toronto, ON'

  },
  {
    title:"Audi quattro A4 2010 AWD",
    img:<img src='../mycar3.png' className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:11000,
    car_status:'active',
    owner:'dealer',
    engine_size: '4 cylinder',
    details:'More details about this vehicle',
    mileage: 30000,
    location:'Toronto, ON'

  },
  {
    title:"Toyota Camry 2021 FWD",
    img:<img src='../mycar3.png'className="hover:scale-105 w-[200px] min-w-[130px]"/>,
    className: "",
    link:'/',
    price:11000.00,
    car_status:'active',
    owner:'dealer',
    engine_size: '4 cylinder',
    details:'More details about this vehicle',
    mileage: 30000,
    location:'Toronto, ON'

  },
]

export const Displaylist = () => {
  return (
   <div className="xl:mx-[0px] flex flex-col justify-items-center mt-5 w-full">
    <h2 className="text-2xl ">Quick search:</h2>
    <h1 className="">Browse by energy source</h1>
    <div className="flex flex-wrap gap-5 justify-center">
       {
        qsearch.map(qs=>(
         
           <Displaycard 
           title={qs.title} 
           content={qs.img} 
           link={qs.link}
           description={qs.details}
           price = {qs.price}
           car_status ={qs.car_status}
           owner = {qs.owner}
           engine_size={qs.engine_size}
           mileage={qs.mileage}
           location={qs.location}
           key={qs.title} className="text-wrap lg:w-[45%] xsm:w-full" />
        ))
       }   
    </div>
    </div>
  )
}
