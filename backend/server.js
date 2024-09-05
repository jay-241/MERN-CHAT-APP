import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";
import { connectDb } from "./config/db.js";

dotenv.config();
connectDb();
const app = express();
app.get("/", (req, res)=>{
    res.send("API is Running")
})

app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.listen(5000, () => {
    console.log("Server Started on PORT 5000");
});
