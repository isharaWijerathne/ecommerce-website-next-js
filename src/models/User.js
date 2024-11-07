import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    user_id :{
        type : String,
        required : [true ,"use_id is required"],
        unique :[true,"user_id is unique filed"]
    },
    first_name : {
        type : String,
        required : [true ,"first_name is required"],
    },
    last_name : {
        type : String,
        required : [true ,"last_name is required"],
    },
    email : {
        type : String,
        required : [true ,"email is required"],
        unique :[true,"user_id is unique filed"]
    },
    address : {
        type : String,
        required : [true ,"address is required"],
    },
    token : {
        type : String,
        default : "xxx-xxx-xxx-xxx"
    },
    account_status : {
        type : Boolean,
        default : false
    },
});


const User = mongoose.models.users || mongoose.model("users",userSchema)
export default User