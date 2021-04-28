import mongoose from 'mongoose'

// create the postmessage schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

// turn schema to model
const Post = mongoose.model('Post', postSchema)

export default Post