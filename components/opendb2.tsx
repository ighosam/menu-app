import sqlite3 from "sqlite3";
import path from 'path'
import { open, Database } from "sqlite";


const dbpath = path.join(process.cwd(),"cardb.db")

export const getdb =  async ()=>{

let db = null
  db =  await open({
    filename:dbpath,
    driver: sqlite3.Database
  })

  const resp = await db.all(
    `SELECT make from cardb`
  )

  const makeArray = resp.map(mke=>mke.make)

   const make = [...new Set(makeArray)]

return make
  
}

export const getModel = async(make:string)=>{
  
  let db = null

  db =  await open({
    filename:dbpath,
    driver: sqlite3.Database
  })

  const resp = await db.all(
    `SELECT model from cardb
     WHERE make = @make
    `,
    {'@make':make}
  )

  const modelArray = resp.map(mod=>mod.model)

   const model = [...new Set(modelArray)]

return model


}


