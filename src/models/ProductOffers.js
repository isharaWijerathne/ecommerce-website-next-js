import mongoose from "mongoose";

const productOffersSchema = new mongoose.Schema({
    product_offer_id :{
        type : String,
        required : [true,"product_offer_id is requierd filed"],
        unique :[true ,"product_offer_id is requierd filed"]
    },
    product_id : {
        type : String,
        required : [true,"product_id is requierd filed"],
    },
    header : {
        type : String,
        required : [true,"header is requierd filed"],
    },
    body : {
        type : String
    },
    code : {
        type : String,
        required : [true , "code is requierd filed"],
        unique :[true ,"product_offer_id is requierd filed"]
    },
    count : {
        type : Number,
        required : [true, "count is required filed"]
    }

});

const ProductOffers = mongoose.models.productOffers || mongoose.model("productOffers",productOffersSchema);
export default ProductOffers;