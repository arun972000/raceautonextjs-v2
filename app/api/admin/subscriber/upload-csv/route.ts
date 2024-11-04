import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        const formData = await req.formData();

        const xlsx= formData.get('file')

        console.log(xlsx)
        return NextResponse.json('success')
    }catch(err){
        console.log(err)
    }
}