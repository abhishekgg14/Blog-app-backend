const express=require("express")
const carModel=require("../models/postModel")
const postModel = require("../models/postModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
    res.send("success")
})

router.get("/view",async(req,res)=>{
    let result=await postModel.find()
    res.json(result)
})

module.exports=router