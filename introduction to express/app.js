
//external module
const express = require('express')

//local module
const requestHandler = require('./user')

const app = express();

app.use((req,res,next)=>{
    console.log("Came in first middleware" , req.url,req.method);
    next();
})

app.use((req,res,next)=>{
    console.log("Came in second middleware" , req.url,req.method);
    res.send(
        "<p>Welcom to 2nd middleware</p>"
    )
})

const port = 3002;
app.listen(port , ()=>{
    console.log(`Successfully running ${port}`)
})