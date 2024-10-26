// เรียกใช้ใน Vue App
import axios from 'axios'

const getTodos = async () => {
    const response = await axios.get('http://localhost:3000/api/todos')
    todos.value = response.data
}

const addTodo = async (newTodo) => {
    const response = await axios.post('http://localhost:3000/api/todos', newTodo)
    todos.value.push(response.data)
}

const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/api/todos/${id}`)
    todos.value = todos.value.filter(todo => todo._id !== id)
}
