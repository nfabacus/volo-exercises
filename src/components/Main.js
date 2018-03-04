import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Mission from './Mission'
import About from './About'

class Main extends Component {
  render(){
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/misson" component={ Mission } />
          <Route exact path="/about" component={ About } />
        </Switch>
      </div>
    )
  }
}

export default Main