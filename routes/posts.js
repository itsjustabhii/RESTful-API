const express = require('express')
const router = express.Router()
//Importing Schema
const Post = require('../models/Post')

//Gets back all the post 
router.get('/', async (req, res) => {        //It sends us back the message.
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err) {
        res.json({message:err})
    }
})

//Submits a new post
router.post('/', async (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
    const savedPost = await post.save()
        res.json(savedPost)
    }catch(err) {
        res.json({message:err})
    }
})

//Specific Post
router.get('/:postId', async (req, res) => {
    try{
    const post = Post.findById(req.params.postId)
    res.json(post)
}catch(err) {
    res.json({message:err})
}
})

//Delete a Post
router.delete('/:postId', async (req, res) => {
    try{
    const removedPost =await  Post.remove({_id: req.params.postId})
    res.json(removedPost)
}catch(err) {
    res.json({message:err})
}
})

//Update a post
router.patch('/:postId', async (req, res) => {
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}})
    res.json(updatedPost)
}catch(err) {
    res.json({message:err})
}
})

module.exports = router