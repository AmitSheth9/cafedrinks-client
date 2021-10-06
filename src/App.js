import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import ListPage from './ListPage'
import CreatePage from './CreatePage'
import EditPage from './EditPage'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <header>
            <NavLink exact activeClassName='active-link' to="/">Home</NavLink>
            <NavLink exact activeClassName='active-link' to="/create">Create</NavLink>
          </header>
          <Switch>
            <Route 
            path="/"
            exact
            render={(routerProps) => <ListPage {...routerProps}/>}/>
            <Route
            path="/create"
            exact
            render={(routerProps) => <CreatePage {...routerProps} />} />
            <Route
            path="/edit/:id"
            exact
            render={(routerProps) => <EditPage {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}


