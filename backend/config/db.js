import mongoose from "mongoose"

export const connectDB= async()=>{
   try {
     const conn= await mongoose.connect(process.env.URI)
     console.log(`data base connected:${conn.connection.host}`);
   } catch (error) {
    console.error(error.message);
    process.exit(1);
    
   }

}