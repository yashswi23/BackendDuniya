const express = require("express");
const app = express();

const port = 3000;

app.get("/ab?c",(req,res)=>{
    res.send("b is optional Here");
})

app.get("/ab+c",(req,res)=>{
    res.send("b can be add manytime hre");
})

app.get("/ab*cd",(req,res)=>{
    res.send("ab and cd should be at last in between anything comes");
})

app.get(/a/,(req,res)=>{
    res.send("If path consist of a it returns this");
})

app.get(/.*fly$/,(req,res)=>{
    res.send("Start with * and end with fly");
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})