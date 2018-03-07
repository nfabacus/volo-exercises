import React, { Component } from 'react'
import WaterRipple from './WaterRipple'
import Particles from 'react-particles-js'

class Header extends Component {
  render(){
    return (
      <div>
        <header className="App-header focus-in-contract-bck">
          <Particles
            style={{position: "absolute", top:0, left:0}}
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 5
                  }
                }
              }
            }}
          />
          <h1>Abacus Learning Lab</h1>
          <h4>Excellence, Diligence, Creativity</h4>
          <p>Online Abacus Maths Course for Children 4 to 11 years olds</p>
        </header>
      </div>
    )
  }
}

export default Header




