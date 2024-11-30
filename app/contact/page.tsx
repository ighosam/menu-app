"use client"
import React, {useEffect,useState} from 'react'
import Wrapper from '@/components/maxWidthWrapper/wrapper'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {useRouter,useSearchParams } from 'next/navigation'
import Link from 'next/link'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


const Contact = () => {
  const searchParams= useSearchParams()
let search = searchParams.get('make')


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })


  const onSubmit = (data)=>{
    search = 'toyota'
    const myurl = `/contact/?make=${search}`
    window.history.pushState(data,'',myurl)
  
  }

  console.log("this is search: ",search)

   return search != undefined ? (<div>
       <h1>DO SOMTHING</h1>
    </div>
):
   (
    <section>
  
      <Wrapper>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </Wrapper>
    </section>
    
  )
}

export default Contact

