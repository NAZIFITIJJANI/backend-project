const Comment = require('../model/comment')


module.exports.post_comment = async(req, res)=>{
   const {content, title} = req.body;
    console.log(content, title);

   try {
    const comment = await Comment.create({content, title})
    res.status(201).json(comment)
   } catch (error) {
    console.log(error)
   }
}
module.exports.get_comment = async(req, res)=>{
   try {
    const comment = await Comment.find()
    res.status(201).json(comment)
   } catch (error) {
    console.log(error)
   }
}



