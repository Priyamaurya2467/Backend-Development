require('dotenv').config()

const app = require('./src/app')
const cors = require('cors')

const connectDb = require('./src/db/db')
connectDb()

const port = 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})