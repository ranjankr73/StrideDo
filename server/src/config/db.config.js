import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

        if(connectionInstance){
            console.log("DB is connected.");
        }

    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
        process.exit(1);
    }
}

export default connectDB;