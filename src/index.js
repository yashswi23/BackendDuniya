const express = require('express');
const app = express();
const port = 3000;
app.use("/hello/2",(req,res)=>{
    res.send("Hello from Hello/2 Route");
})
//IF The order of hello is above then this doesnt work the same It does not go to hello/2;
app.use("/hello",(req,res)=>{
    res.send("Hello from Hello Route");
})
app.use("/test",(req,res)=>{
    res.send("This is Route for testing");
})
app.listen(port,()=>{
    console.log(`server is Listeing on ${port} `);
});