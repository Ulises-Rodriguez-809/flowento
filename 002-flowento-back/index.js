import express from 'express'
import usersRoutes from './src/routes/userRoutes.js';

const app = express()

app.get("/",(req,res)=>{
    res.json({
        status : "success",
        msg : "ghol"
    })
})

app.use("/users", usersRoutes);


app.listen(8080,()=>{
    console.log("ghoiakljh");
})