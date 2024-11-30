
import React from 'react'
import { Button } from '@/components/ui/button'
import  {SelectForm} from './searchForm'
import { getdb } from '@/components/opendb2'


const make = await getdb()
const Hero = async () => {
  


  return (
    <div className="text-white w-full text-[20px]">
    <div className="flex justify-start w-full">
      <div className="flex-1">
        <img src='/mycar3.png' alt="" width={300} height={300}/>
      </div>
     
     <div className="flex-1 flex-col min-h-[100px] bg-blue-400 rounded-lg p-2
     text-center align-middle">
     <h1 className="sm:text-4xl lg:text-4xl text-4xl text-white text-center">
     Dream it </h1>
     <p>check here for your dream car</p>
     <p className="text-muted pt-4">Buying and selling of automobile made simple</p>
<div className="h-full pt-5">
      <Button className="bg-orange-600 hover:bg-orange-600/80"> Browse listings</Button>
    </div>
     </div>
    </div>
<div className="flex w-full h-full justify-center">
  <div className="rounded-2xl p-5 text-foreground">
   <SelectForm make={make}/>


  </div>

</div>
     
    </div>
     

    
  

   
    


  
  )
}

export default Hero