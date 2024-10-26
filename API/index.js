const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

// เชื่อมต่อ MongoDB
mongoose.connect('mongodb://localhost/todo-app', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())

// นำเข้า route
const todosRoute = require('./routes/todos')
app.use('/api/todos', todosRoute)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
