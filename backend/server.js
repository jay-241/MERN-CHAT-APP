import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";
import { connectDb } from "./config/db.js";
import { router } from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();
connectDb();
const app = express();

app.use(express.json()) //to accept json data

app.get("/", (req, res)=>{
    res.send("API is Running")
})

app.use("/api/user", router)


app.use(notFound)

app.use(errorHandler)


app.listen(5000, () => {
    console.log("Server Started on PORT 5000");
});
