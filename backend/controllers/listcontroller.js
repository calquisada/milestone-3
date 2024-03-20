const express = require('express');
const Todo = require('express').Router();
const db = require('../models');

const { User, ToDoList } = db

// Home Page
Todo.get('/', async (req, res) => {
    const todo = await ToDoList.findAll()
    res.json(todo)
})


// Adding a new Todo
Todo.post('/', async (req, res) => {
    if(req.currentUser?.role !== 'admin'){
        return res.status(403).json({ message: 'You are not allowed to add a todo'})
    }
    const todo = await ToDoList.create(req.body)
    res.json(todo)
})

// Deleting a Todo
Todo.delete('/:ToDoListId', async (req, res) => {
    if(req.currentUser?.role !== 'admin'){
        return res.status(403).json({ message: 'You are not allowed to delete'})
    }
    let ToDoListId = Number(req.params.ToDoListId)
    if (isNaN(ToDoListId)) {
        res.status(404).json({ message: `Invalid id "${ToDoListId}"` })
    } else {
        const todo = await ToDoList.findOne({
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
    if(req.currentUser?.role !== 'admin'){
        return res.status(403).json({ message: 'You are not allowed to edit'})
    }
    let ToDoListId = Number(req.params.ToDoListId)
    if (isNaN(placeId)) {
        res.status(404).json({ message: `Invalid id "${ToDoListId}"` })
    } else {
        const todo = await ToDoList.findOne({
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