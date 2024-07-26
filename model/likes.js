const mongoose = require('mongoose')

const likesSchema = mongoose.Schema({

    count: {
        type: Number,
        required: true
    }

})

const Likes = mongoose.model('likes', likesSchema);
module.exports = Likes;
