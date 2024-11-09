import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    order_id : {
        type : String,
        required :[true,"order_id is required filed"],
        unique : [true, "order_id is unique filed"]
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required :[true,"user_id is required filed"],
    },
    product_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "products",
        required :[true,"product_id is required filed"],
    },
    lable_price : {
        type:Number,
        required : [true,"lable_price is requierd filed"],
        default : 0
    },
    cat_discount : {
        type:Number,
        default : 0
    },
    cat_discount_price : {
        type:Number,
        default : 0
    },
    product_discount : {
        type:Number,
        default : 0
    },
    product_discount_price : {
        type:Number,
        default : 0
    },
    final_price : {
        type:Number,
        required : [true,"final_price is required"],
    },
    order_status : {
        type : String,
        enum:{
            values:["pending","packing","delivered",'canceled'],
            message:"type is not suppoted"
        }
    },
    payment_status : {
        type:String,
        enum:{
            values:["card","cod"], //cod -> cash on delivery
            message:"type is not suppoted"
        }
    }
    
});

const Order = mongoose.models.orders || mongoose.model("orders",orderSchema);
export default Order;