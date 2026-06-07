import mongoose from "mongoose"
import { log } from "node:console";

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => 
            console.log('Database Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
    } catch (error) {
        console.log(error);
        
    }
}