import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    product_id : {
        type:String,
        required :[true,"product_id is requierd"],
        unique: true
    },
    product_cat_id : {
        type:String,
        requierd :[true,"product_cat_id is required"]
    },
    header : {
        type: String,
        required :[true,'header is reuired']
    },
    brand_name : {
        type: String,
        required :[true,'brand name is reuired']
    },
    img_location :{
        type:[]
    },
    stars : {
        type: Number,
        default: 0
    },
    price : {
        type: Number,
        default :0
    },
    available_count : {
        type : Number,
        default :0
    },
    product_status :{
        type : Boolean,
        default : false
    }

});


const Product = mongoose.models.products || mongoose.model("products",productSchema);
export default Product;