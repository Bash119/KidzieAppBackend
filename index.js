const express=require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=8080;




app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/",(req,resp)=>{
    resp.send("Welcome Bashar");
});


app.listen(PORT);