import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

export const Sign = () => {
  const signin = true
  return (
    <div >
      <Link href="/sign" className="hidden md:block">{signin ? 
      <div className={cn(buttonVariants({variant:'outline'}))}>Sign in /Register</div>:
      <div className={cn(buttonVariants({variant:'outline'}))}>sign out</div>}</Link>
      </div>
  )
}

