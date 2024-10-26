const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

// GET all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// POST create a new todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        content: req.body.content,
        category: req.body.category,
        done: req.body.done || false
    })

    try {
        const newTodo = await todo.save()
        res.status(201).json(newTodo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// PATCH update a todo
router.patch('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updatedTodo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETE a todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({ message: 'Deleted Todo' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router
