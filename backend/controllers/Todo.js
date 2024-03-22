const router = require('express').Router()
const db = require('../models')

const { lists } = db

// Home Page
router.get('/', async (req, res) => {
    const todo = await lists.findAll()
    res.json(todo)
})

// Adding a new Todo
router.post('/', async (req, res) => {
    const todo = await lists.create(req.body)
    res.json(todo)
})

// Deleting a Todo
router.delete('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const todo = await lists.findOne({
            where: {
                id: id
            }
        })
        if (!todo) {
            res.status(404).json({ message: `Could not find todo with id "${id}"` })
        } else {
            await todo.destroy()
            res.json(todo)
        }
    }
})
// Editing a Todo
router.put('/:id', async (req, res) => {

    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const todo = await lists.findOne({
            where: { id: id },
        })
        if (!todo) {
            res.status(404).json({ message: `Could not find todo with id "${id}"` })
        } else {
            Object.assign(todo, req.body)
            await todo.save()
            res.json(todo)
        }
    }
})

//Show Page
router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)
    console.log('Hello')
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const todo = await lists.findOne({
            where: { id: id }
        })
        if (!todo) {
            res.status(404).json({ message: `Could not find place with id "${id}"` })
        } else {
            res.json(todo)
        }
    }
})

module.exports = router