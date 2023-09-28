
const express = require('express');
const bodyParser=require('body-parser');

const app = express();

const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
// app.use('/',(req,res,next)=>{
//     res.send('<h1>Home 11</h1>');
//     console.log("hi");
//    next();
// });

// app.use('/add-product',(req,res,next)=>{
    
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Submit</button></form>');
    

// });
// app.use('/add-product',(req,res,next)=>{
// res.send('<form action="/product" method="POST"><input type="number" name="size"><button type="submit">Add Size</button></form>');
// });
// app.use('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect("/")   ;
//     });

app.use((req,res,next)=>{
    
    res.status(404).send('<h1>Product not found</h1>');
});
    
// app.use((req, res, next)>{
//     res.send("<h1>Page Not Found</h1>")
// }); 
app.listen(3000);
