const express = require('express');
const router = express.Router();
const Todo = require("../models/");

Todo.get('/', (req, res) => {
    db.Todos.find()
    .then(todos => {
        res.render('index', { todos }); 
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
    });
});



