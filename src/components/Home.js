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
        <div className="container-fluid">
          <div className="container">
            <div className="jumbotron title-area">
              <h1 className="display-3">Abacus Learning Lab</h1>
              <p className="lead">Abacus Learning Lab is a unique online platform where we explore methods and techniques for children to learn basic numeracy and maths, in particular with the use of Japanese abacus concepts.</p>
              <hr className="my-4" />
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid block-row bg-blueviolet">
          <div className="container">
            <h4>
            Through the use of the Japanese Abacus and other materials, our course aims to help children excel with their mental arithmetic, school maths, and even other subjects, by developing their concentration, reasoning, visualisation (creativity), and tenacity.
            </h4>
          </div>
        </div>
        <div className="container-fluid block-row bg-white color-grey">
          <div className="container">
            <p>With the use of the abacus, Abacus Maths Learning Course aims to help children…​​​​​​​​​​​</p>
            <ul className="list">
              <li className="list-item">Develop cognitive skills (Concentration, attention, visualisation, auditory processing, and logic).</li>
              <li className="list-item">Develop ability to search, recognise, and understand patterns, processes, and their relationships for solving problems.</li>
              <li className="list-item">Internalise basic maths facts, patterns, processes, and their relationships.</li>
              <li className="list-item">Develop tenacity (which some people call "GRIT").</li>
            </ul>
            <br />
            <p>These are knowledge, skills, abilities, and creativity essential for learning and life.
            For this aim, the Abacus Maths Learning Course will continue to research and endeavour to improve its teaching methods and materials.</p>
          </div>
        </div>
      </div>
    )
}

export default Home

