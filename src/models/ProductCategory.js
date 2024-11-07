import mongoose  from "mongoose";

const productCatSchema = new mongoose.Schema({
    product_cat_id :{
        type :String,
        required :[true,"product_cat-id is required filed"]
    },
    product_cat :{
        type :String,
        required : [true,"product_cat is required fild"]
    },
    discout_percentage : {
        type : Number,
        default : 0
    }
});








const ProductCatogory = mongoose.models.productCat || mongoose.model("productCat",productCatSchema);
export default ProductCatogory;