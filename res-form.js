
const express = require('express');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

// app.use('/',(req,res,next)=>{
//     console.log("hi");
//     next();
// });

app.use('/add-product',(req,res,next)=>{
    
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Submit</button></form>');
    

});
// app.use('/add-product',(req,res,next)=>{
// res.send('<form action="/product" method="POST"><input type="number" name="size"><button type="submit">Add Size</button></form>');
// });
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")   ;
    });

app.use('/',(req,res,next)=>{
    
    res.send('<h1>Home Page</h1>');
});
    
 
app.listen(3000);
