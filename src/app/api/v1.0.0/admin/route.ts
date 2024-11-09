import { connectDb } from "@/dbConfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Admin from "@/models/Admin";
import StaticGenarator from "@/inc/staticGenerator";
import bcrypt from "bcryptjs"

export async function POST(req:NextRequest)
{
    try {
        
        //connect db
        connectDb();

        //reqbody
        const reqBody = await req.json();
        const {first_name,last_name,email,password} = reqBody

        //get last created admin admin
        const last_created_admin = await Admin.findOne().sort({_id : -1});

        //id genarate
        let nextId : string = "";
        if(last_created_admin == null){
            nextId = "ADM-000001"
        }else{
            nextId = StaticGenarator.NextID(last_created_admin.admin_id)
        }


        //create passwrod

        var salt = bcrypt.genSaltSync(10);
        var hash_password = bcrypt.hashSync(password, salt);

        const _created_admin = await Admin.create({
            admin_id : nextId,
            first_name : first_name,
            last_name : last_name,
            email : email,
            password : hash_password
        })

        const send_admin_obj = _created_admin.toObject();
        delete send_admin_obj._id;
        delete send_admin_obj.__v;
        delete send_admin_obj.password;
        delete send_admin_obj.token;

        return NextResponse.json({
            status : "success",
            data : {
                admin : send_admin_obj
            }
        },{status : 200})
        
    } catch (error) {
        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
        
    }
}