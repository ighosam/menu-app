import plugin from "tailwindcss/plugin";


export const shadcnPlugin = plugin(
  function({addBase}){
     
    addBase({
      'test':{
            textTransform:'uppercase'
       
      }
    }
  
  )
 
  }
)