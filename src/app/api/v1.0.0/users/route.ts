import { connectDb } from "@/dbConfig/dbconfig";
import { NextRequest , NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/User";
import StaticGenarator from "@/inc/staticGenerator";

export async function POST(req : NextRequest){
    
    try {
        //database connection
        connectDb();

        //req handle
        const reqBody = await req.json();
        const {first_name, last_name, email, address, password} = reqBody;

        //password hash
        var salt = bcrypt.genSaltSync(10);
        var hash_password = bcrypt.hashSync(password, salt);

        //generate user
        const last_created_user = await User.findOne().sort({_id:-1});

        let nextId : string = "";

        if(last_created_user == null){
            nextId = "USR-000001";
        }else{
            nextId = StaticGenarator.NextID(last_created_user.user_id);
        }

        //create user
        const _created_user = await User.create({
            user_id : nextId,
            first_name : first_name,
            last_name:last_name,
            email :email,
            address : address,
            password : hash_password,
            account_status : true
        })


        //send user
        const send_user = _created_user.toObject();

        //remove senstive fild
        delete send_user._id;
        delete send_user.__v;
        delete send_user.password;
        delete send_user.token;

        return NextResponse.json({
            status : "success",
            data : {
                user : send_user
            }
        },{status : 200})

    } catch (error) {

        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }
}