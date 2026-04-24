const express = require('express')
const postRoutes = require('./routes/post.routes')
const authRoutes = require("./routes/auth.routes");
const connectDb = require('./db/db');
const cookieParser = require('cookie-parser')

const app = express();
connectDb()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use("/api/auth",authRoutes)
app.use('/api/posts',postRoutes)

module.exports = app