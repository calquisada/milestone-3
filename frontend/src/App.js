import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LogInForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/todo" component={ToDoIndex} />
          <Route exact path="/todo/new" component={NewList} />
          <Route exact path="/todo/:id" component={TodoListShow} />
          <Route exact path="/todo/:id/edit" component={EditList} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  )
}

export default App;
