import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){
    try {

        const searchPatams = req.nextUrl.searchParams;
        const data = searchPatams.get("data")


        
        return NextResponse.json({
            status : "success",
            data : {
               product : data
            }
        })

    } catch (error) {
        return NextResponse.json({
            status : "fail",
            data : error.message
        })

    }
}