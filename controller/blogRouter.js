const express=require("express")
const usermodel=require("../models/userModel")

const router=express.Router()

router.post("/signup",async(req,res)=>{
    let data=req.body
    let details=new usermodel(data)
    let result=await details.save()
    res.json({
        status:"success"
    })
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let data=await usermodel.find(input)
    res.json(data)
})

module.exports=router