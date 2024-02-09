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

module.exports=router