import React from 'react'
import { ReactNode } from 'react'
import {cn} from '@/lib/utils'

const Wrapper = ({className,children}:{className?:string,children:ReactNode}) => {
  return (
    <div className={cn('mx-auto w-full sm:max-w-screen-2xl sm:px-2',className)}>{children}</div>
  )
}

export default Wrapper