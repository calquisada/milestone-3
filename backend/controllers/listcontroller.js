const express = require('express');
const router = express.Router();
const Todo = require("../models/");

// Home Page
Todo.get('/', (req, res) => {
    db.Todos.find()
        .then(todos => {
            res.render('index', { todos }); 
        })
        .catch(err => {
            console.error(err); ///Can be turned into res.render('error404') once we get 404 pages done
            res.status(500).send('Server Error');
    });
});

// Adding a new Todo
Todo.post('/', (req, res) => {
    db.Todos.create(req.body)
        .then(() => {
            res.redirect('/') ///fill in
        })
        .catch(err => {
            console.error(err); ///Can be turned into res.render('error404') once we get 404 pages done
            res.status(500).send('Server Error');
        })
})

