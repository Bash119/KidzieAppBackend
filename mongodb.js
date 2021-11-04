const express=require('express');
const MongoClient =require('mongodb').MongoClient;


const signupUser=require('./models/UserModel');
const cors=require("cors");
const app=express();
app.use(cors());


var database;
app.use(express.json());




app.get("/",(req,resp)=>{

    resp.send("welcome to mongodb");

});

app.get("/api/productgroups",(req,resp)=>{
    database.collection("productgroups").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/agegroups",(req,resp)=>{
    database.collection("agegroups").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/designers",(req,resp)=>{
    database.collection("desginers").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/promocodes",(req,resp)=>{
    database.collection("promocodes").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/categories",(req,resp)=>{
    database.collection("categories").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});


app.post("/api/users",(req,resp)=>{
    const Signeduser=new signupUser({
        fullName:req.body.fullName,
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password

    })
    database.collection("UserTable").insertOne(Signeduser,(err,result)=>{
        if(err) console.log(err);
        resp.send(result)
    })
    // Signeduser.save()
    // .then(data =>{
    //     resp.json(data)
    // })
    // .catch(error =>{
    //     resp.json(error)
    // })
});

app.listen(8080,()=>{
    MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser:true},(error,result)=>{
        if(error) throw error;
        database=result.db("Kidziedatabase");
        console.log("connected successfully");

    });
});