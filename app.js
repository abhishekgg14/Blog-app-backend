const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRoute=require("./controller/blogRouter")
const postRoute=require("./controller/postRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://abhishekgg14:Gireesh5655@cluster0.aeekxv7.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api",blogRoute)
app.use("/api/pt",postRoute)

app.listen(3001,()=>{
    console.log("Running")
})