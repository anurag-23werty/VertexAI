import dotenv from "dotenv"
import express from "express"
import { connectDb } from "./config/db.js"

dotenv.config()
const port = process.env.PORT || 8002
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({"message":"hello from project service"})
})

app.listen(port,()=>{
    connectDb()
    console.log(`project service started at port ${port}`)
})