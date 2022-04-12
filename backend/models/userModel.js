const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        // to prevent addition of duplicate emails
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
},
{ 
    timestamps: true
})

// 'User' - Model name; userSchema - Schema
module.exports = mongoose.model('User', userSchema)
