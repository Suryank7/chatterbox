import mongoose from "mongoose"
import { log } from "node:console";

export const connectDB = async (retries = 5) => {
    while (retries > 0) {
        try {
            mongoose.connection.once('connected', () => 
                console.log('Database Connected'));
            
            await mongoose.connect(process.env.MONGODB_URI);
            return;
        } catch (error) {
           console.error("Mongo Error:", error.message);
           retries -= 1;
           console.log(`Retries left: ${retries}. Waiting 2 seconds before retrying...`);
           await new Promise(res => setTimeout(res, 2000));
        }
    }
    console.error("Could not connect to MongoDB after multiple retries");
    process.exit(1);
}