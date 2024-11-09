import { NextRequest , NextResponse } from "next/server";
import Product from '@/models/Product';
import ProductCatogory from "@/models/ProductCategory"
import { connectDb } from "@/dbConfig/dbconfig";

//get product by id
export async function GET(req:NextRequest,{params})
{
    try {

        //connectDb
        connectDb();

        //feach id form params
        const id = params.id 


        //get database product
        const _product = await Product.findOne({product_id : id});

         //throw err if product null
         if(_product == null){
            throw new Error("invalid product id");
        }

        //get product category
        const _product_cat = await ProductCatogory.findOne({product_cat_id : _product.product_cat_id });


        //product -> send format
        const created_product = {
            product_id : _product.product_id,
            product_cat : {
                product_cat : _product_cat.product_cat,
                discout_percentage : _product_cat.discout_percentage
            },
            header : _product.header,
            brand_name : _product.brand_name,
            img_location :_product.img_location,
            stars : _product.stars,
            price : _product.price,
            available_count : _product.available_count,
            product_status : _product.product_status
        }

       

        return NextResponse.json({
            status : "success",
            data : created_product
        },{status : 200})
        
    } catch (error) {
        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }
}


//edit produt by id
export async function POST(req:NextRequest,{params}) {

    try {

        //connect database
        connectDb();

        //feach id form params
        const id = params.id 

        //req
        const reqBody = await req.json();


        //get database product
        const _product = await Product.findOneAndUpdate({product_id : id},reqBody,{new : true});

        //throw err if product null
        if(_product == null){
            throw new Error("invalid product id");
        }

        const send_edited_product = _product.toObject();
        delete send_edited_product.__v;
        delete send_edited_product._id;

         

        return NextResponse.json({
            status : "success",
            data : send_edited_product
        },{status : 200})
        
    } catch (error) {

        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }
}

//delete
export async function DELETE(){

}