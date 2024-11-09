import { connectDb } from "@/dbConfig/dbconfig";
import Product from "@/models/Product";
import ProductCatogory from "@/models/ProductCategory";
import ProductOffers from "@/models/ProductOffers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){
    try {

        //connectdb
        connectDb();

        const searchPatams = req.nextUrl.searchParams;

        const product_cat_id = searchPatams.get("id") //id or value => "any"
        const price = searchPatams.get("price")

        //search db
        const _selected_product = await Product.find({
            $and :[
                { product_cat_id : { $eq : product_cat_id}},
                { price : {$gte : price}}
            ]
        },{_id : 0, __v:0})


        if(product_cat_id == "any"){


        }
        else{

            //get product cat
            const _productCategory = await ProductCatogory.findOne({product_cat_id : product_cat_id});

            // _productCategory -> null erro
            if(_productCategory == null){
                return NextResponse.json({
                    status : "fail",
                    message : "invalid product_cat_id"
                },{status : 404})
            }

            //findProductOffers

            const _offers = await ProductOffers.findOne({
                $and :[
                    { product_cat_id : { $eq :product_cat_id } },
                    { count : { $gt : 0 }  }
                ]
            });














        }


        const product_count = _selected_product.length;
        
        return NextResponse.json({
            status : "success",
            data : {
                count :product_count, 
               products : _selected_product
            }
        })

    } catch (error) {
        return NextResponse.json({
            status : "fail",
            message : error.message
        })

    }
}