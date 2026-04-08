const mongoose = require('mongoose')


const postSchema = new mongoose.connect({
    image: String,
    caption:string
})

const postModel = postSchema