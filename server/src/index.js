import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./config/db.config.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection error: ", err);
})