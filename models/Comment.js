const mongoose = require('mongose');
const Shcema = mongoose.Schema;

const comment = new Schema({
    id: String,
    content: String,
    createdAt: String,
    score: Number,
    user: {
        image: {
            png: String,
            webp: String,
        },
        username: String
    },
    replies: Array
})
