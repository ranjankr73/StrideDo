import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/index.js";

dotenv.config({
    path: "src/.env" //full path is required
});

const PORT = process.env.PORT || 8001;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection error: ", err);
})