
"use client"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { toast } from "@/components/hooks/use-toast"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {useSearchParams } from "next/navigation"
import  router,{useRouter} from 'next/router'

export  function SelectForm({make}:{make:string[]}) {
make = make.sort()



//const router = useRouter()
const searchParams= useSearchParams()
const search = searchParams.get('make')


const FormSchema = z.object({
  make: z.string({
      required_error: "Please select an email to display.",
    }).min(2),
    model:  z.string({required_error:"Select Model"}).min(2),
    location: z.string({required_error:"enter location"}).min(2)
    
})


console.log("Router is: ",search)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues:{
      make:getAsString(search),
      model:'',
      location:''

    }
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    
   console.log("hello submit",router.query.make)
  
    typeof window !== 'undefined' &&
      router.push({
        pathname:'/contact',
        query:data
      }, undefined, {shallow:false}
    ) 
    
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-3/3 space-y-6 flex
      justify-center lg:flex-row flex-col">
        <FormField 
          control={form.control}
          name="make"
          render={({ field }) => (
            <FormItem className="lg:w-[200px] w-[80vw] pl-6 lg:pl-0 mr-3 mt-6">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    make.map(mk=><SelectItem value={mk} key={mk}>{mk}</SelectItem>)
                  }
                  
                 {/*map function close here */} 
                </SelectContent>
              </Select>
           
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem className="lg:w-[200px] w-[80vw] pl-6 lg:pl-0 mr-3">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
             
                </SelectContent>
              </Select>
             
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField control={form.control} name="location"
              render={({field})=>(
                <FormItem className="lg:w-[200px] w-[80vw] pl-6 lg:pl-0 mr-3">
                <FormControl>
                  <Input type="text" placeholder="Postal code" {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
       />
       <div className="pl-6 lg:pl-0">
         <Button type="submit" className="lg:w-[200px] w-[75vw] lg:pl-0">Browse</Button>
       </div>
      </form>
    </Form>
  )
}
export const Mycomp = ()=>{
  return (
    
    <SelectItem value="m@example.com">m@example2.com</SelectItem>
  )
}
export const getAsString = ( value:string|string[]|undefined|null ):string =>{
 if(Array.isArray(value)){
  return value[0]
 }
 return !value ? '':value
 
}