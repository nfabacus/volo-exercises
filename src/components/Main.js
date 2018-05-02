import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Orders from './Orders'
import Contact from './Contact'

class Main extends Component {
  render(){
    return (
      <div className="main">
        <Switch>
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/" component={ Orders } />
          <Redirect to="/" component={ Orders } />
        </Switch>
      </div>
    )
  }
}

export default Main