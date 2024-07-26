const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    content:{
        type: String,
    },

    title:{
        type: String
    }

})

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;