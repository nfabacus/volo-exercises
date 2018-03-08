import React from 'react'
import Particles from 'react-particles-js'

const Home = (props)=>{
    return (
      <div>
          <Particles 
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
            style={ {width:'100%', position: "absolute", left: 0, top: 0 }}
          />
        <div className="container-fluid block-row pb-5">
          <div className="container">
            <div className="jumbotron title-area">
              <h1 className="display-3">Abacus Learning Lab</h1>
              <p className="lead">Abacus Learning Lab is an online platform which explores unique methods and techniques for children and parents to practice basic numeracy and maths, in particular with the use of Japanese abacus concepts.</p>
              <hr className="my-4" />
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid block-row bg-blueviolet slope-open-right">
          <div className="container">
            <h2>Mission</h2>
            <h3>
            Develop confidence with our mental arithmetic, school maths, and even other subjects, through practice, concentration, reasoning, visualisation (creativity).
            </h3>
          </div>
        </div>
        <div className="container-fluid block-row bg-abacus1">
          <div className="container">
          </div>
        </div>
        <div className="container-fluid block-row slope-open-left bg-white color-grey">
          <div className="container">
            <p>In particular, Abacus Maths Learning Course aims to help children:​​​​​​​​​​​</p>
            <ul className="list">
              <li className="list-item"><span className="bullet-point"></span>Develop cognitive skills (Concentration, attention, visualisation, auditory processing, and logic).</li>
              <li className="list-item"><span className="bullet-point"></span>Develop ability to search, recognise, and understand patterns, processes, and their relationships for solving problems.</li>
              <li className="list-item"><span className="bullet-point"></span>Internalise basic maths facts, patterns, processes, and their relationships.</li>
              <li className="list-item"><span className="bullet-point"></span>Develop tenacity (which some people call "GRIT").</li>
            </ul>
            <br />
            <p>These are knowledge, skills, abilities, and creativity essential for learning and life.
            For this aim, the Abacus Maths Learning Course will continue to research and endeavour to improve its teaching methods and materials.</p>
          </div>
        </div>
        <div className="container-fluid block-row">
          <div className="container">
          </div>
        </div>
        <div className="container-fluid block-row bg-blueviolet slope-open-right">
          <div className="container">
            <h2>Theory and Eight Petals</h2>
            <h3>Theoretical Basis behind the Abacus Maths Learning</h3>
            <h3>
            ‘Our Understanding of the World is Relational, Relative, and Multi-fold.’
            </h3>
            <h3>
              Our world is manifested and expressed in different ways.
              Different expressions – some concrete and some abstract – are inter-related and relative to each other, describing our understanding of the world.

              Helping children explore, understand and internalise this inter-relationship and relativity will give them the solid foundation and enrichment in their learning of maths, other subjects, and boost their general intelligence.

              On the contrary, children who solely rely on their rote memory for the answer without understanding of the problem may not be able to solve the same question when expressed in different ways.
            </h3>
          </div>
        </div>
        <div className="container-fluid block-row slope-open-right bg-white color-grey">
          <div className="container">
            <p>In particular, Abacus Maths Learning Course aims to help children:​​​​​​​​​​​</p>
            <ul className="list">
              <li className="list-item"><span className="bullet-point"></span>Develop cognitive skills (Concentration, attention, visualisation, auditory processing, and logic).</li>
              <li className="list-item"><span className="bullet-point"></span>Develop ability to search, recognise, and understand patterns, processes, and their relationships for solving problems.</li>
              <li className="list-item"><span className="bullet-point"></span>Internalise basic maths facts, patterns, processes, and their relationships.</li>
              <li className="list-item"><span className="bullet-point"></span>Develop tenacity (which some people call "GRIT").</li>
            </ul>
            <br />
            <p>These are knowledge, skills, abilities, and creativity essential for learning and life.
            For this aim, the Abacus Maths Learning Course will continue to research and endeavour to improve its teaching methods and materials.</p>
          </div>
        </div>
        <div className="container-fluid block-row">
          <div className="container">
          <p>© 2018 by Abacus Maths Learning Course. All rights reserved.</p>
          </div>
        </div>
      </div>
    )
}

export default Home

