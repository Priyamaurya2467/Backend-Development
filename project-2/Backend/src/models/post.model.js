const mongoose = require('mongoose')

const postSchemea = new mongoose.Schema({
    image:String,
    title: String,
    author:String,
    caption: String,
    likes: {
        type: Number,
        default: 0
    },
    comments : [
        {
            text:String,
            createdAt: {
                type: Date,
                default:Date.now()
            }
        }
    ]
})

const postModel = mongoose.model("creation" , postSchemea)

module.exports = postModel