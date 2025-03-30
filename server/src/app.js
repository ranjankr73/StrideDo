import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//common middlewares
app.use(cors({
    origin: ['http://localhost:5173', 'https://stridedo.vercel.app'],
    credentials: true
}));

app.options('*', cors({
    origin: ['https://stridedo.vercel.app'],
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//import routes
import authRouter from "./routes/auth.route.js";
import taskRouter from "./routes/task.route.js";
import contactRouter from "./routes/contact.route.js";

//routes
app.use("/api/v1/user", authRouter);
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/contact", contactRouter);

export { app };