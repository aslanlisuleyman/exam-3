const Ash = require("../models/Ash.model")

const AshController={
    getAll:async(req,res)=>{
        try{
            const ashs=await Ash.find()
            res.status(200).send(ashs)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const{id}=req.params
            const target=await Ash.findById(id)
            res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    delete:async(req,res)=>{
        try{
            const{id}=req.params
            await Ash.findByIdAndDelete(id)
            const ashh=await Ash.find({})
            res.send(ashh)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const {images,title,image,name,price}=req.body
            const newAsh=new Ash({images,title,image,name,price})
            await newAsh.save()
            res.status(201).send("success")
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const {images,title,image,name,price}=req.body
            await Ash.findByIdAndUpdate(id,{images,title,image,name,price})
            res.status(200).send("success")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports={AshController}