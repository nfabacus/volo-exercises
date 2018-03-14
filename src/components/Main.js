import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Course from './Course'

class Main extends Component {
  render(){
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/course" component={ Course } />
        </Switch>
      </div>
    )
  }
}

export default Main