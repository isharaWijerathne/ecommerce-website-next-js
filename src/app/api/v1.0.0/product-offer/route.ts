import { connectDb } from "@/dbConfig/dbconfig";
import StaticGenarator from "@/inc/staticGenerator";
import Product from "@/models/Product";
import ProductOffers from "@/models/ProductOffers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){

    try {
        
        //connect db
        connectDb();
        console.log("rouw work");
        

        //reqBody
        const reqBody = await req.json();

        const {product_id, header, body, code, count, discount} = reqBody;

        //findProduct
        const _product = await Product.findOne({product_id : product_id});

        if(_product ==null){

            return NextResponse.json({
                status : "fail",
                message : "invalid product id"
            },{status : 404})
        }


        //create offer id
        const _last_created_product_offer = await ProductOffers.findOne().sort({_id:-1});
    
           
        let nextID : string = '';
        if(_last_created_product_offer == null){
            nextID = "OFR-000001";
        }else{
            nextID = StaticGenarator.NextID(_last_created_product_offer.product_offer_id);
        }

        //create offer

        const _created_product_offer = await ProductOffers.create({
            product_offer_id : nextID,
            product_id : product_id,
            header :  header,
            body :  body,
            code : code,
            count : count,
            discount : discount
        });


        //send obj
        const send_created_object = _created_product_offer.toObject();

        //remover files
        delete send_created_object._id;
        delete send_created_object.__v;

        return NextResponse.json({
            status : "success",
            data : {
                product_offer : send_created_object
            }
        },{status : 200})


        

    } catch (error) {
        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }

}