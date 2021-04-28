import mongoose from 'mongoose'
import Post from '../models/post.js'


// for creating all handlers for routes
// get all posts
export const getPosts = async (req, res) => {
    
    try {
        const blogPost = await Post.find() // retrieve all posts
        // return status plus posts in json
        res.status(200).json(blogPost)
    } 
    catch (err) {
        res.status(404).json({ message: err.message })
    }

}

// create a post
export const createPost = async (req, res) => {
    
    const post = req.body
    // create new post
    const newPost = new Post({...post, creator: req.userId, createdAt: new Date().toISOString()})
    try {
        // save the post
        await newPost.save()
        // successful create and save
        res.status(201).json(newPost)
    } 
    catch (err) {
        res.status(409).json({ message: err.message })
    }

}

// update a post
export const updatePost = async (req, res) => {
    
    try {
        const { id: _id } = req.params
        const post = req.body
        // check if a post is valid using id
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found with that id')
        // else if id is valid proceed to update
        const updatedPost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
        res.json(updatedPost)
    } 
    catch (err) {
        res.status(409).json({ message: err.message })
    }

}

// delete a post
export const deletePost = async (req, res) => {
    
    try {
        const { id } = req.params
        // check if a post is valid using id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post found with that id')
        // else if id is valid proceed to delete
        await Post.findByIdAndRemove(id)
        res.json({ message: 'Post Deleted!' })
    } 
    catch (err) {
        res.status(409).json({ message: err.message })
    }

}

// like a post
export const likePost = async (req, res) => {
    
    try {
        const { id } = req.params
        // check if user is authenticated
        if(!req.userId) return res.json({message: 'Not logged in'})
        // check if a post is valid using id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post found with that id')
        const post = await Post.findById(id)
        // check if user's id has already liked
        const index = post.likes.findIndex((id) => id === String(req.userId))
        // if the user hasn't liked the post
        if(index === -1){
            // like post
            post.likes.push(req.userId)
        }
        else{
            // dislike post
            post.likes = post.likes.filter((id) => id !== String(req.userId))
        }
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true})
        res.json(updatedPost)
    } 
    catch (err) {
        res.status(409).json({ message: err.message })
    }

}