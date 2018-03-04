import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Menubar from './components/Menubar'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Menubar />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
