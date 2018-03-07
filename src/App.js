import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Menubar from './components/Menubar'
import Main from './components/Main'
import Footer from './components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

import './App.css'

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <BrowserRouter>
        <div className="App">
          <Menubar />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
      </ParallaxProvider>
    )
  }
}

export default App;
