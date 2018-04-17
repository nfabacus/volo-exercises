import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Course from './Course'
import Abacus from './Abacus'
import Contact from './Contact'

class Main extends Component {
  render(){
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/course" component={ Course } />
          <Route exact path="/abacus" component={ Abacus } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </div>
    )
  }
}

export default Main