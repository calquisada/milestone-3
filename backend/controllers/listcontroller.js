const Todo = require('express').Router()
const db = require('../models')


// Home Page
Todo.get('/', (req, res) => {
    db.Todos.find() 
        .then(Todos => { 
            res.render('components/homepage', { Todos }); 
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
            res.redirect('components/newlist') // Fill in
        })
        .catch(err => {
            console.error(err); // Can be turned into res.render('error404') once we get 404 pages done
            res.status(500).send('Server Error');
        })
})

// Deleting a Todo
Todo.delete('/:id', (req, res) => {})
    db.Todos.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('components/showlist') // Fill in
        })
        .catch(err => {
            console.error(err); // Can be turned into res.render('error404') once we get 404 pages done
            res.status(500).send('Server Error');
        })

// Editing a Todo
Todo.put('/:id', (req, res) => {
    db.Todos.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect('components/editlist') // Fill in
        })
        .catch(err => {
            console.error(err); // Can be turned into res.render('error404') once we get 404 pages done
            res.status(500).send('Server Error');
        })
})


module.exports = Todo