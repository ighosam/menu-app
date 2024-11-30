import React from 'react'
import Categorycard from './categorycard'

const quicksearch = () => {
  return (
    <div className="mt-16"><div className="text-4xl text-muted-foreground sm:pl-0 pl-5 mb-4">Newly listed</div>
    <div className="flex flex-wrap mx-auto w-[90%] my-auto h-[90%] mr-0 justify-start space-x-6">
      {
      /* Use card to list and this will be loaded by parallel route to prevent blocking */ 
      }
    <Categorycard />
    <Categorycard />
    <Categorycard />
    <Categorycard />
    <Categorycard />
</div>
    </div>
  )
}

export default quicksearch