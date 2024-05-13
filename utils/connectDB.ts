import mongoose from "mongoose";

let connected:boolean = false

export default async function connectDB(){
    if(connected){
        console.log("Already connected");
        return
    }
    if(process.env.MONGO_URL){
        try{
            await mongoose.connect(process.env.MONGO_URL, {
                bufferCommands: false, // Disable command buffering
            });
            connected = true
            console.log("Connected to DB....")
        }catch(err:any){
            console.log(err)
        }
    }
   
}