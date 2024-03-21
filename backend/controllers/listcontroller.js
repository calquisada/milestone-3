const Todo = require('express').Router()
const db = require('../models')

const { lists } = db

// Home Page
Todo.get('/', async (req, res) => {
    const todo = await lists.findAll()
    res.json(todo)
})


// Adding a new Todo
Todo.post('/', async (req, res) => {
    const todo = await lists.create(req.body)
    res.json(todo)
})

// Deleting a Todo
Todo.delete('/:ToDoListId', async (req, res) => {
    let ToDoListId = Number(req.params.ToDoListId)
    if (isNaN(ToDoListId)) {
        res.status(404).json({ message: `Invalid id "${ToDoListId}"` })
    } else {
        const todo = await lists.findOne({
            where: {
                ToDoListId: ToDoListId
            }
        })
        if (!todo) {
            res.status(404).json({ message: `Could not find todo with id "${ToDoListId}"` })
        } else {
            await todo.destroy()
            res.json(todo)
        }
    }
})
// Editing a Todo
Todo.put('/:ToDoListId', async (req, res) => {
    let ToDoListId = Number(req.params.ToDoListId)
    if (isNaN(placeId)) {
        res.status(404).json({ message: `Invalid id "${ToDoListId}"` })
    } else {
        const todo = await lists.findOne({
            where: { ToDoListId: ToDoListId },
        })
        if (!todo) {
            res.status(404).json({ message: `Could not find todo with id "${ToDoListId}"` })
        } else {
            Object.assign(todo, req.body)
            await todo.save()
            res.json(todo)
        }
    }
})


module.exports = Todo