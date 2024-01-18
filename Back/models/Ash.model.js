const mongoose=require("mongoose")

const Ash=mongoose.model("Ash",new mongoose.Schema({
    images:String,
    title:String,
    image:String,
    name:String,
    price:Number
}))

module.exports=Ash