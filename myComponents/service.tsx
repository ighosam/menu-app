import axios from 'axios'
export const formInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export const serverInstance = axios.create({
  baseURL: 'http://localhost:4000'
})

export const serverFetch = async (url:string)=>{
const res = await serverInstance.get(url)
return res.data
}

export const formFetch = async (url:string)=>{
  const res = await formInstance.get(url)
  return res.data
}