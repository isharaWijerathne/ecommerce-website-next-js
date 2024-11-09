import { connectDb } from "@/dbConfig/dbconfig";
import ProductCatogory from "@/models/ProductCategory";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req : NextRequest,{params})
{
    try {
        
        connectDb();

        const {id} = params;

        const product_cat_data = await ProductCatogory.findOne({product_cat_id : id},{_id :0, __v : 0});

        return NextResponse.json({
            status : "success",
            message : product_cat_data
        },{status : 200})

    } catch (error) {
        
        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }
}

export async function POST(req:NextRequest,{params})
{

   
   try {

    connectDb();

    const {id} = params;
    const reqBody = await req.json();
    const {discout_percentage} = reqBody;

    //find from db
    const product_cat = await ProductCatogory.findOneAndUpdate({product_cat_id : id},{discout_percentage : discout_percentage},{new:true});
   // const product_cat = await ProductCatogory.find({product_cat_id : id});


    return NextResponse.json({
        status : "success",
        data : {
            product_category : product_cat
        }
    },{status : 200})
   
    
   } catch (error : any) {

    return NextResponse.json({
        status : "fail",
        message : error.message
    },{status : 404})
   }
}




