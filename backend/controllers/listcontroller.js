const Todo = require('express').Router()
const db = require('../models')

// Home Page
Todo.get('/', (req, res) => {
    db.Todos.find() 
        .then(todos => {
            res.render('index', { todos }); 
        })
        .catch(err => {
            console.error(err); // Can be turned into res.render('error404') once we get 404 pages done
            res.status(500).send('Server Error');
    });
});

// Adding a new Todo
Todo.post('/', (req, res) => {
    db.Todos.create(req.body)
        .then(() => {
            res.redirect('/') // Fill in
        })
        .catch(err => {
            console.error(err); // Can be turned into res.render('error404') once we get 404 pages done
            res.status(500).send('Server Error');
        })
})

// Deleting a Todo
Todo.delete('/:id', (req, res) => {})  

// Editing a Todo
Todo.put('/:id', (req, res) => {})


module.exports = Todo