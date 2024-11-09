import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    admin_id :{
        type : String,
        required : [true ,"admin_id is required"],
        unique :[true,"admin_id is unique filed"]
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
    password : {
        type : String,
        required :[true,"password is requierd filed"],
        default : "xxx-xxx-xxx-xxx"
    },
    token : {
        type : String,
        default : "xxx-xxx-xxx-xxx"
    }
});


const Admin = mongoose.models.admins || mongoose.model("admins",adminSchema)
export default Admin