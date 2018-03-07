import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-scroll-parallax'
import Header from './Header'

class Home extends React.Component {
    render() {
        return (
          <div>
            <Parallax
              className="custom-class"
              offsetYMax={20}
              offsetYMin={-20}
              slowerScrollRate
              tag="figure"
            >
              <Header />
            </Parallax>

            <Parallax
              className="custom-class"
              offsetYMax={20}
              offsetYMin={-20}
              slowerScrollRate
              tag="figure"
            >
              <div className="container">
                <h4>
                  Abacus x Maths Learning is a unique maths enrichment course, mainly aimed at primary school aged children. 
                </h4>
                <h4>
                  Through the use of the Japanese Abacus and other materials, the course is designed to help children excel with their mental arithmetic, school maths, and even other subjects, by developing their concentration, reasoning, visualisation (creativity), and tenacity.
                </h4>
              </div>
            </Parallax>
            
            <Parallax
              className="custom-class"
              offsetYMax={20}
              offsetYMin={-20}
              slowerScrollRate
              tag="figure"
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <br />
                    <p>With the use of the abacus, Abacus Maths Learning Course aims to help children…​​​​​​​​​​​</p>
                    <div>
                      <p
                      >Develop cognitive skills (Concentration, attention, visualisation, auditory processing, and logic).</p>
                      <p>Develop ability to search, recognise, and understand patterns, processes, and their relationships for solving problems.</p>
                      <p>Internalise basic maths facts, patterns, processes, and their relationships.</p>
                      <p>Develop tenacity (which some people call "GRIT").</p>
                    </div>
                    <br />
                    <p>These are knowledge, skills, abilities, and creativity essential for learning and life.
                    For this aim, the Abacus Maths Learning Course will continue to research and endeavour to improve its teaching methods and materials.</p>
                  </div>
                </div>
              </div>
            </Parallax>

            <Parallax
              className="custom-class"
              offsetYMax={20}
              offsetYMin={-20}
              slowerScrollRate
              tag="figure"
            >
              © 2018 by Abacus Maths Learning Course. All rights reserved.
            </Parallax>
          </div>
        )
    }
}


export default Home

