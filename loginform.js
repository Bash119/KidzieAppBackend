var express=require('express');
var router=express.Router();
const users=[
    {
        email:'bash@gmail.com',
        password:'password'
    }
]
router.get("/",(res,req)=>{
    res.send("Welcome to server");
});
router.post("/api/loginform",(req,res)=>{
    let result=users.find(user => user.email == req.body.email)
    if(result)
    {
        if(result.password == req.body.password)
        {
            res.status(200).send({
                message:"Successful login!"
            })
        } else{
            res.status(200).send({
                message:"User not found!"
            })
        }
    }

});

module.exports=router;