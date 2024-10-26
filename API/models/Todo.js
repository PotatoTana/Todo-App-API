const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    content: { type: String, required: true },
    category: { type: String, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Todo', TodoSchema)
