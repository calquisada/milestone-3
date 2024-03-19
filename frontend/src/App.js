import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
// import LoginForm from './users/login'
import SignUpForm from './users/signup'
import CurrentUserProvider from './contexts/CurrentUser'
import EditList from './components/editlist'
import ToDoIndex from './components/homepage'
import LogInForm from './Home'
import NavBar from './components/navbar'
import NewList from './components/newlist'
import TodoListShow from './components/showlist'

function App() {
  return (
    <CurrentUserProvider>
        <NavBar />
          <Routes>
            <Route exact path="/" component={LogInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/todolist" component={ToDoIndex} />
            <Route exact path="/todolist/new" component={NewList} />
            <Route exact path="/todolist/:TodolistId" component={TodoListShow} />
            <Route exact path="/todolist/:TodolistId" component={EditList} />
          </Routes>
    </CurrentUserProvider>
  )
}

export default App;
