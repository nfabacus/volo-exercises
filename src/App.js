import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Menubar from './components/Menubar'
import Main from './components/Main'

import store from './store'

import 'react-datepicker/dist/react-datepicker.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Menubar />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
