import mongoose, { MongooseError } from "mongoose";

export async function connectDb()
{
    try {
        mongoose.connect(process.env.APP_MONGO_CON_SRT!);
        const connection = mongoose.connection;

        connection.on("connected",() =>{
            console.log("database connected succesfully");
            
        })

        connection.on("error",(err)=>{
            console.log("mongoDB error " + err);
            
            process.exit();
        })
        
    } catch (ex)
     {
        console.log(ex);
        
    }
}