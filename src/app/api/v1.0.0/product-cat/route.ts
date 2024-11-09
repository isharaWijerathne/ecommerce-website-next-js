import { connectDb } from "@/dbConfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import ProductCatogory from "@/models/ProductCategory"
import StaticGenarator from "@/inc/staticGenerator";

export async function POST(req:NextRequest)
{
    try {
        
        connectDb();

        //get data from clien req
        const reqBody = await req.json();
        const {product_cat_name} = reqBody;

        //get last created id fron db
        const lastcreatedProdctCat = await ProductCatogory.findOne().sort({_id:-1})

        //genarate next id
        let nextId : string =""; 

       if(lastcreatedProdctCat == null){
            nextId = "PRC-000001";
        }
        else {
            nextId = StaticGenarator.NextID(lastcreatedProdctCat.product_cat_id);
        }
        
        //create product cat
        const created_product_cat = await ProductCatogory.create({
            product_cat_id : nextId,
            product_cat : product_cat_name,
            discout_percentage : 0
        })

        return NextResponse.json({
            status : "success",
            data: {
                product_category : created_product_cat
            }
        },{status : 200})

    } catch (error :any) {
        
        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }
    
}

