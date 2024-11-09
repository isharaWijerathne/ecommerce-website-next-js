import { NextRequest ,NextResponse } from "next/server";
import Product from "@/models/Product"
import ProductCatogory from "@/models/ProductCategory";
import { connectDb } from "@/dbConfig/dbconfig";
import StaticGenarator from "@/inc/staticGenerator";
import mongoose from "mongoose";


export async function POST(req : NextRequest){
    try {
       
        //connect db
        connectDb();
    
        //data from
        const reqBody = await req.json();
        const {product_cat_id,header,brand_name,imgs,stars,price,available_count} = reqBody;

        
        //find product category
        const product_cat = await ProductCatogory.findOne({product_cat_id : product_cat_id})
        
        
        //if product null -> throw exception 
        if(product_cat == null){
            throw new Error("invalid product id");
        }
        
       
        //genarate product id
        //get last product_id
        const last_created_product = await Product.findOne().sort({_id: -1 });

       
        let nextId : string = "";
        if(last_created_product == null){
            // if database empty -> create first recode
            nextId = "PRD-000001";
        }else 
        {
            //genarate id base on lass recode
            nextId = StaticGenarator.NextID(last_created_product.product_id);
        }

        
        
        //new product
        const _new_product = await Product.create({
            product_id : nextId,
            product_cat_id :   product_cat._id,
            header : header,
            brand_name : brand_name,
            img_location : imgs,
            stars : stars,
            price : price,
            available_count : available_count,
            product_status : true
        });


        //send new product
        const send_product = _new_product.toObject();
        delete send_product._id;
        delete send_product.__v;
        
        return NextResponse.json({
            status : "success",
            data : {
               product : send_product
            }
        })

    } catch (error) {
        
        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }
}