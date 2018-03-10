import React from 'react'
import Particles from 'react-particles-js'
import Scrollchor from 'react-scrollchor'

const Home = (props)=>{
    return (
      <div className="home">
          <Particles 
            params={{
              "particles": {
                "number": {
                  "value": 30,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 4.7,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 19.489853095232284,
                    "size_min": 1.6241544246026904,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#8bcdf9",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 3,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}
            style={ {width:'100%', position: "absolute", left: 0, top: 0 }}
          />
        <div className="container-fluid block-row pb-5">
          <div className="container">
            <div className="jumbotron title-area">
              <h1 className="display-3">Abacus Learning Lab</h1>
              <p className="lead">Online platform which explores unique learning methods for numeracy and maths</p>
              <hr className="my-4" />
              <br />
              <br />
              <div className="text-center arrow-group mt-5">
                <Scrollchor to="#mission" role="button"><span className="circle"><span className="down-arrow" ></span></span></Scrollchor>
              </div>
            </div>
          </div>
        </div>
        <div id="mission" className="container-fluid block-row bg-blueviolet slope-open-right">
          <div className="container">
            <h2>Mission</h2>
            <h3>
            Develop confidence with our mental arithmetic, school maths, and even other subjects, through practice, concentration, reasoning, visualisation (creativity).
            </h3>
          </div>
        </div>
        <div className="container-fluid block-row bg-abacus1">
          <div className="container">
            <div className="text-center arrow-group">
              <Scrollchor to="#aims" role="button"><span className="circle"><span className="down-arrow" ></span></span></Scrollchor>
            </div>
          </div>
        </div>
        <div id="aims" className="container-fluid block-row slope-open-left bg-white color-grey">
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
            For this aim, we will continue to research and endeavour to improve its teaching methods and materials.</p>
          </div>
        </div>
        <div className="container-fluid block-row">
          <div className="container">
            <div className="text-center arrow-group">
              <Scrollchor to="#theory" role="button"><span className="circle"><span className="down-arrow" ></span></span></Scrollchor>
            </div>
          </div>
        </div>
        <div id="theory" className="container-fluid block-row bg-blueviolet slope-open-right">
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
        <div id="eight-petals" className="container-fluid block-row slope-open-right_white bg-white color-grey">
          <div className="container pt-5">
            <br />
            <br />
            <h3>Yaē (Eight Petals) of the Abacus Maths Learning</h3>
            <ul className="list">
              <li className="list-item"><span className="bullet-point"></span>Exposure (to different expressions of problems)​​</li>
              <li className="list-item"><span className="bullet-point"></span>Internalisation Exercise (by mnemonics and repetition)</li>
              <li className="list-item"><span className="bullet-point"></span>Cognitive training (by use of visual, auditory, kinaesthetic senses through the Japanese Abacus)</li>
              <li className="list-item"><span className="bullet-point"></span>Individual Learning (individual students working on their own learning speed.  Each child comes first before the group progress/targets in school)</li>
              <li className="list-item"><span className="bullet-point"></span>Structured Learning  (Step by Step, clear learning objectives and levels)</li>
              <li className="list-item"><span className="bullet-point"></span>Consistency/Perseverance  (Recognition by Abacus Teacher, Parents and Children that learning the Abacus Maths is like running a marathon or learning piano.  Be the tortoise than the hare.)</li>
              <li className="list-item"><span className="bullet-point"></span>Elements of Fun, Creativity, and Motivation (Without them, it is hard to last!)</li>
              <li className="list-item"><span className="bullet-point"></span>Research into all areas and aspects of learning (to improve the efficiency of learning)  E.g. Group dynamics in learning, Peer to Peer learning.</li>
            </ul>
          </div>
        </div>
        <div className="container-fluid block-row">
          <div className="container">
            <div className="text-center arrow-group">
              <Scrollchor to="#" role="button"><span className="circle"><span className="up-arrow" ></span></span></Scrollchor>
            </div>
            <br />
            <p className="lead">© 2018 by Abacus Maths Learning Course. All rights reserved.</p>
          </div>
        </div>
      </div>
    )
}

export default Home

