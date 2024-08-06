import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.json({
        status : "success",
        msg : "ghol"
    })
})

app.listen(8080,()=>{
    console.log("ghoiakljh");
})