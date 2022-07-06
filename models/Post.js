const mongoose = require('mongoose')

//Schema - Represents how that post looks

const PostSchema = mongoose.Schema({
    title: {type: String,
    required:true},
    description:{type: String,
        required:true},
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema)
                                // name    Schema name to use