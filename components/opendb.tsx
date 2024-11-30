import React from 'react'
import path from 'path'
import sqlite3 from 'sqlite3'

const dbpath = path.join(process.cwd(),"cardb.db")

export const db = new sqlite3.Database(dbpath,sqlite3.OPEN_READWRITE, 
  (err)=>{
    if(err){
      console.log("Error opening database")
    }
    console.log("connected to car database")
  }
)


export const apiGet = async(query:string)=>{

  return await new Promise((resolve,reject)=>{
    db.all(query,(err:Error,row:any)=>{
      if(err){
        console.log(err)
        return reject(err)
      }
       return resolve(row)
    })

  } )  
}

export const getmydb = async ()=>{


}