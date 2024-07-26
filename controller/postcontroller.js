const Post = require('../model/posts')


module.exports.post_post = async(req, res)=>{
    const {title, postContent} = req.body;
 console.log(title, postContent)
 
    try {
     const abc = await Post.create({title, postContent})
     res.status(201).json(abc)
    } catch (error) {
     console.log(error)
    }
 }
 module.exports.get_post = async(req, res)=>{
    try {
     const abc = await Post.find()
     res.status(201).json(abc)
    } catch (error) {
     console.log(error)
    }
 }