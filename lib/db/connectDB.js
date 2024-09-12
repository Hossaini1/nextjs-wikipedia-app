import mongoose from "mongoose";

const connectDB = async () =>{
    console.log(process.env.NEXT_PUBLIC_MONGODB_URL)
    if (!process.env.NEXT_PUBLIC_MONGODB_URL){
        throw new Error('MONGODB_URL is not defined!')
    }
    try {
     await   mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL)
        console.log('Conneting with MongoDB successfuly!')
    }catch(err){
        console.log('Connecting with Mongodb failed!',err)
    }
}

export default connectDB;