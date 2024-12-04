
import { NextRequest, NextResponse} from "next/server";
import { getModel } from "@/components/opendb2";
//import { getAsString } from "@/app/(home)/searchForm";
import { getAsString } from "@/myComponents/getstring";

export  async function GET(req:NextRequest,res:NextResponse){
  const mke = req.nextUrl.searchParams.get('make')
  const make = getAsString(mke)

  console.log("make: ",make)
  const models = await getModel(make)
    //console.log(models)
return NextResponse.json(models)

}