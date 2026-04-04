/*external module*/
const express = require('express')

//Local module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express()


app.use(express.urlencoded())

app.use(userRouter)

app.use(hostRouter)



const port = 3000;
app.listen(port , ()=>{
    console.log(`done localhost:${port}`)
})
