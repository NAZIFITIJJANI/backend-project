const Likes = require('../model/likes')

module.exports.post_likes = async(req, res)=>{
const {count} = req.body;
console.log(count)
 
    try {
     const abc = await Likes.create({count})
     res.status(201).json(abc)
    } catch (error) {
     console.log(error)
    }
 }
 module.exports.get_likes = async(req, res)=>{
    try {
     const abc = await Likes.find()
     res.status(201).json(abc)
    } catch (error) {
     console.log(error)
    }
}