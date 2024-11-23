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
        const page : number = Number(searchPatams.get("page")) - 1 || 0


        //params -> any -> allProduct
        if(product_cat_id == "any"){

            let perPage = 15;
            //let page = 0; //page start form zero

            //Product -> list
            const _selected_product = await Product.aggregate([
              {
                $match:{
                  price: { $lte: Number(price) }
                }
              },
                {
        
                    $lookup: {
                        from: 'productcats',
                        localField: "product_cat_id",
                        foreignField: "_id",
                        as: "product_cat"
                      }
                },
                {
                  $skip: perPage * page,
                },
                
                {
                  $limit: perPage,
                }
              ]);
              
              console.log(_selected_product.length);
              
    

              //Offers ->
              const _offers = await ProductOffers.find({
                $and: [
                  { discount: { $gt: 0 } },
                  { count: { $gt: 0 } }
                ]
              });


              const send_result = _selected_product.map(prd =>{

                    _offers.forEach(ofr =>{ 
                       
                        if(String(ofr.product_id) == String(prd._id)){
                           
                            prd.product_offers = ofr;
                        }
                      
                    })

                    return prd;
              });
              
            return NextResponse.json({
                status : "success",
                data : send_result
            })

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

            let perPage = 15;
           // let page = 0; // Page starts from zero
            
            // Product -> list
            const _selected_product = await Product.aggregate([
              
              {
                $match: {
                //   product_cat_id: _productCategory._id, 
                //    price: { $gte: price }    
                
                    $and : [
                        {product_cat_id: _productCategory._id },
                        {price: { $lte: Number(price) }}
                    ]
                },
              },
             
              {
                $lookup: {
                  from: 'productcats',            
                  localField: 'product_cat_id',   
                  foreignField: '_id',            
                  as: 'product_cat',             
                },
              },
              
              {
                $skip: perPage * page,
              },
              
              {
                $limit: perPage,
              },
            ]);
            

            //match Product Offers ->
               const _offers = await ProductOffers.find({
                $and: [
                  { discount: { $gt: 0 } },
                  { count: { $gt: 0 } }
                ]
              });
            

           
            const sendObject  =  _selected_product.map( prd =>{

                _offers.forEach(ofr =>{ 
                   
                    if(String(ofr.product_id) == String(prd._id)){
                       
                        prd.product_offers = ofr;
                    }
                  
                })

                return prd;
            });  


            return NextResponse.json({
                status : "success",
                data : sendObject
            })
    

        }

        
        
    } catch (error) {
        return NextResponse.json({
            status : "fail",
            message : error.message
        })

    }
}