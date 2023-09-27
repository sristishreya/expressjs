
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("hi");
next();

});

app.use((req,res,next)=>{
    console.log("hi1");
    res.send('{ key1: value }');
    

});
    
 
app.listen(4000);
