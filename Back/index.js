const express= require("express")
require("dotenv").config()
const mongoose =require("mongoose")
const cors=require("cors")
const AshRouter=require("./routes/Ash.routes")
const app=express()
const PORT=process.env.PORT || 3009
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/start").then(res=>{
    console.log("app running")
})
app.use("/user",AshRouter)

app.listen(PORT,()=>{
    console.log("running Mongo DB")
})