const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        phone:String,
        address:String,
        pin:String,
        email:String,
        pass:String,
    }
)

module.exports=mongoose.model("blog",blogSchema)