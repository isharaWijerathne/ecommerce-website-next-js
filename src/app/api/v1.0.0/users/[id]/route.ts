import { NextRequest , NextResponse } from "next/server";
import User from "@/models/User";
import { connectDb } from "@/dbConfig/dbconfig";

export async function GET(req:NextRequest,{params}){

    try {

        //connectDb
        connectDb()

        //user id
        const user_id = params.id;

        //get data from database
        const selected_user = await User.findOne({user_id : user_id},{__v : 0, _id : 0,token : 0,password : 0}); 

        //throw err ->if user null
        if(selected_user == null){
            throw new Error("invalid user id");
        }

        return NextResponse.json({
            status : "success",
            data : {
                user : selected_user
            }
        },{status : 200})
        
    } catch (error) {
        
        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})
    }
}


export async function POST(req:NextRequest,{params}){
    try {
        //connectDb
          connectDb()

        //user id
          const user_id = params.id;

        //reqbody
          const reqBody = await req.json();

        //editedUser
          const _edited_user = await User.findOneAndUpdate({user_id : user_id},reqBody,{new:true});

        //throw err ->if user null
            if(_edited_user == null){
                throw new Error("invalid user id");
            }

        //send user

        const sent_user = _edited_user.toObject();

        //remove sensitive filed
            delete sent_user.password;
            delete sent_user.token;


            return NextResponse.json({
                status : "success",
                data : {
                    edited_user : sent_user
                }
            },{status : 404})
     
        
    } catch (error) {

        return NextResponse.json({
            status : "fail",
            message : error.message
        },{status : 404})

    }
}