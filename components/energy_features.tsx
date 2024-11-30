import React from 'react'
import Carcard from './carcard'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LiaGasPumpSolid } from "react-icons/lia";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdOutlineElectricCar } from "react-icons/md";
import { Button } from './ui/button';

const qsearch= [
  {
    title:"Gasolin",
    img:<LiaGasPumpSolid size={80}/>,
    className: "",
    link:'/'

  },
  {
    title:"Diesel",
    img:<BsFuelPumpDiesel size={80}/>,
    className: "",
    link:'/'

  },
  {
    title:"Hybrid",
    img:<BsFillFuelPumpDieselFill size={80}/>,
    className: "",
    link:'/'


  },
  {
    title:"Biodiesel",
    img:<BsFillFuelPumpDieselFill size={80}/>,
    className: "",
    link:'/'


  },
  {
    title:"Electric",
    img:<MdOutlineElectricCar  size={80}/>,
    className: "",
    link:'/'

  },
  {
    title:"Natural Gas",
    img:<BsFillFuelPumpDieselFill size={80}/>,
    className: "",
    link:'/'

  },
  {
    title:"Propane",
    img:<LiaGasPumpSolid size={80} />,
    className: "",
    link:'/'

  },
  {
    title:"Ethanol",
    img:<BsFillFuelPumpDieselFill size={80}/>,
    className: "",
    link:'/'

  },
]

const features = () => {
  return (
    <div className="mt-10 flex justify-center m-6">
      <div>

    <h1 className="text-muted-foreground mt-5">Browse by energy source</h1>
    <div className="flex flex-wrap justify-center  sm:justify-start w-[100%] mt-2
      gap-5">
       {
        qsearch.map(qs=>(
          <Link href={qs.link} key={qs.title}>
          <div className="flex rounded-xl ">
            <div className="text-center">
            <Button className="p-4 font-semibold bg-[#60A5FA] hover:bg-[#73a7e7]">{qs.title}</Button>
            
            </div>
          </div>
          </Link>
       
        ))
       }   
  </div>
    </div>
    </div>
  )
}

export default features