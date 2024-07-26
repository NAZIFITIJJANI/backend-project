const mongoose = require('mongoose')
const User = require('./User')

const postSchema = mongoose.Schema({
    title: { type: String, required: true },

    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    content: { type: String, required: true },

    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]


});


const Post = mongoose.model('posts', postSchema);
module.exports = Post;