import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./config/db.config.js";

dotenv.config({ path: "./.env" });

export default async (req, res) => {
    try {
        await connectDB();
        console.log("Database is connected");
        return app(req, res);
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        return res.status(500).end();
    }
}