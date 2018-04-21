import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Scrollchor from 'react-scrollchor'

class Home extends Component {

    state={
      section: 0
    }

    handleScrollClick=()=>{
      console.log("Clicked!", this.state.section)
      const nextSection = this.state.section>=5?0:this.state.section+1
      this.setState({ section: nextSection },()=>{
        this.scrollchor.simulateClick()
      })
    }

    render() {
      console.log("this.state.section>>", this.state.section)
      return (
        <div className="bg-abacus">
          <div className="text-center arrow-group" onClick={this.handleScrollClick}>
            <div className="circle">
              <span className={ this.state.section>=5?"up-arrow":"down-arrow" } >
                <Scrollchor
                  to={`#${this.state.section}`}
                  role="button"
                  ref={(ref)=>{this.scrollchor=ref}}
                >
                </Scrollchor>
              </span>
            </div>
          </div>
          <div 
            id="0"
            onMouseEnter={()=>{this.setState({ section: 0 })}}
            className="container-fluid block-row pb-5">
            <div className="container">
              <div className="jumbotron title-area">
                <h1 className="display-4">Abacus Learning Lab</h1>
                <p className="lead">Online platform which explores unique learning methods for numeracy and maths</p>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 1 })}}
            id="1" className="container-fluid block-row bg-blueviolet slope-open-right"
          >
            <div className="container">
              <h2>Mission</h2>
              <h3>
              Develop confidence with our mental arithmetic, school maths, and even other subjects, through practice, concentration, reasoning, visualisation (creativity).
              </h3>
            </div>
          </div>
          <div className="container-fluid block-row bg-abacus5">
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 2 })}}
            id="2" className="container-fluid block-row slope-open-left bg-white color-grey"
          >
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
          <div className="container-fluid block-row bg-abacus2">
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 3 })}}
            id="3" className="container-fluid block-row bg-blueviolet slope-open-right"
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Theory and Eight Petals</h2>
                  <h3>Theoretical Basis behind the Abacus Maths Learning</h3>
                  <h3>
                  ‘Our Understanding of the World is Relational, Relative, and Multi-fold.’
                  </h3>
                  <div className="mt-4">
                    <img className="float-right m-2" style={{maxWidth: "95%"}} src={require('../assets/expressions.jpg')} alt="expression diagram" />
                    <p>
                      Our world is manifested and expressed in different ways.
                      Different expressions – some concrete and some abstract – are inter-related and relative to each other, describing our understanding of the world.
                    </p>
                    <p>
                      Helping children explore, understand and internalise this inter-relationship and relativity will give them the solid foundation and enrichment in their learning of maths, other subjects, and boost their general intelligence.
                    </p>
                    <p>
                      On the contrary, children who solely rely on their rote memory for the answer without understanding of the problem may not be able to solve the same question when expressed in different ways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid block-row bg-abacus6">
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 4 })}}
            id="4" className="container-fluid block-row slope-open-left bg-white color-grey"
          >
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
          <div
            onMouseEnter={()=>{this.setState({ section: 5 })}}
            id="5"
            className="container-fluid block-row">
            <div className="container">
              <br />
              <p className="lead">© 2018 by Abacus Maths Learning Course. All rights reserved.</p>
            </div>
          </div>
        </div>
      )
    }
}

export default Home

