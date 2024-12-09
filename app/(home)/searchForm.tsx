
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
import  {useRouter} from 'next/navigation'
import { getAsString } from "@/myComponents/getstring"
import { formFetch } from "@/myComponents/service"
import useSWR from 'swr'
import { useState } from "react"


export  function SelectForm({makes}:{makes:string[]}) {
makes = makes.sort()

//let modelse


const router = useRouter()
const searchParams= useSearchParams()
 /* const model = searchParams.get('model') */
const [make, setMake] = useState(searchParams.get('make'))
const [model,setModel]= useState(searchParams.get('model'))

 
const FormSchema = z.object({
  make: z.string({
      required_error: "Please select an email to display.",
    }).min(2),
    model:  z.string({required_error:"Select Model"}).min(2),
    location: z.string({required_error:"enter location"}).min(2)
    
})


console.log("Router is: ",make)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues:{
      make: getAsString(make),
      model: getAsString(model),
      location:''

    }
  })

  console.log("Make is : ",make)
  let models = useSWR(`/api/models?make=${make}`,formFetch,
    {
     onSuccess:()=>{
    
     }
  })
//check for the initial value for make and set it to 'All' if it is null
  if(make==null){
    form.setValue('make','All')
  }
//check for the initial value for model and set it to 'All' if it is null
  if(model==null){
    form.setValue('model','All')
  }
 
  function onSubmit(data: z.infer<typeof FormSchema>) {

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    
    /*
   console.log("hello submit",router.query.make)
  
    typeof window !== 'undefined' &&
      router.push({
        pathname:'/contact',
        query:data
      }, undefined, {shallow:false}
    ) 
    */
    
   router.push('/search?make=Acura')
    
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-3/3 space-y-6 flex
      justify-center lg:flex-row flex-col">
        <FormField 
          control={form.control}
          name="make"
          render={({field }) => (
            <FormItem className="lg:w-[200px] w-[80vw] pl-6 lg:pl-0 mr-3 mt-6">
              <Select onValueChange={
              (value)=> {
                setMake(value)
                setModel('All') //set model to empty string to reset model field
                
                form.setValue('make',value)
                field.onChange
              } 
              } 
              value={make != (undefined)?make:'All'}
              defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="All Make" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value='All'>All Makes</SelectItem>
                  {
                    makes.map(mk=><SelectItem value={mk} key={mk}>{mk}</SelectItem>)
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
              <Select onValueChange={
                (value)=>{
                  setModel(value)
                 form.setValue('model',value)
                 
                 
                }
                
              } 
               value={ model != null ? model: ''}
              defaultValue={field.value}
              disabled={models.data?.length == 0}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='All Model' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value='All'>All Models</SelectItem>
                {
                  models.data && ( models.data.map(mk=><SelectItem value={mk} key={mk}>{mk}</SelectItem>))
                  }
             
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

