import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Scrollchor from 'react-scrollchor'

class Course extends Component {

    state={
      section: 0
    }

    handleScrollClick=()=>{
      console.log("Clicked!", this.state.section)
      const nextSection = this.state.section>=4?0:this.state.section+1
      this.setState({ section: nextSection },()=>{
        this.scrollchor.simulateClick()
      })
    }

    render() {
      console.log("this.state.section>>", this.state.section)
      return (
        <div>
          <div className="text-center arrow-group" onClick={this.handleScrollClick}>
            <div className="circle">
              <span className={ this.state.section>=4?"up-arrow":"down-arrow" } >
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
            className="container-fluid block-row bg-abacus3">
            <div className="container">
              <div className="title-area">
                <h1 className="display-4">Course</h1>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 1 })}}
            id="1" className="container-fluid block-row bg-blueviolet slope-open-right"
          >
            <div className="container">
              <h3>Online Learning Platform</h3>
              <ul className="list">
                <li className="list-item"><span className="bullet-point"></span>Allows children to learn and practise the abacus and maths in a structured way.</li>
                <li className="list-item"><span className="bullet-point"></span>Each child can work through the levels at their own pace, with instant feedback given to progress their learning.</li>
                <li className="list-item"><span className="bullet-point"></span>By combining use of the actual or on-screen abacus with a tablet or computer, children can practise their maths at home and in classroom environments.</li>
                <li className="list-item"><span className="bullet-point"></span>Current platform is available from <a href="https://www.abacusmathslearning.com" target="_blank">here</a>.</li>
                <li className="list-item"><span className="bullet-point"></span>Commencing the development of a new improved platform.</li>
              </ul>
            </div>
          </div>
          <div className="container-fluid block-row bg-abacus4">
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 2 })}}
            id="2" className="container-fluid block-row slope-open-left bg-white color-grey"
          >
            <div className="container">
              <h3>Online Video Classes</h3>
              <div>
                <img className="float-right m-2" style={{maxWidth: "95%"}} src={require('../assets/videoclass.jpg')} alt="expression diagram" />
              </div>
              <ul className="list">
                <li className="list-item"><span className="bullet-point"></span>Small Group (up to 10 students per session)​​</li>
                <li className="list-item"><span className="bullet-point"></span>Video call session (WebRTC technology)</li>
                <li className="list-item"><span className="bullet-point"></span>Abacus x Maths Learning Class brought to your kitchen table/living room via your convenient device</li>
                <li className="list-item"><span className="bullet-point"></span>Device required. Laptop, tablet, smart TV and even smart phone could be used. Desktop can also be used (webcam, microphone, and speakers required). - technical requirements must be met to guarantee reliable call quality.</li>
                <li className="list-item"><span className="bullet-point"></span>Good broadband connection is required.  WiFi required in case of tablets and other devices wirelessly connected to the internet.</li>
                <li className="list-item"><span className="bullet-point"></span>Chrome or Firefox Browsers required for PC/laptop</li>
                <li className="list-item"><span className="bullet-point"></span>A parent/guardian should accompany the child during the session and assist with their learning.</li>
                <li className="list-item"><span className="bullet-point"></span>Currently available only on every Tuesday (5:30pm-6:30pm) - limited availablity.</li>
              </ul>
            </div>
          </div>
          <div className="container-fluid block-row bg-abacus5">
            <div className="container">
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 3 })}}
            id="3" className="container-fluid block-row bg-blueviolet slope-open-right"
          >
            <div className="container">
              <h3>What do children learn in this course?</h3>
              <ul className="list">
                <li className="list-item"><span className="bullet-point"></span>Maths for General Reasoning and Logical Thinking Skills (relationships between concrete objects, language, visual representations, and abstracts)</li>
                <li className="list-item"><span className="bullet-point"></span>Times Tables with imagination – even 5 year olds can learn all the 1-10 times tables.</li>
                <li className="list-item"><span className="bullet-point"></span>Master the foundation of +, -, x, ÷ using the abacus and its concepts. (Essential for Primary Education and Life)</li>
                <li className="list-item"><span className="bullet-point"></span>Develop the habit of mental arithmetic without over-reliance on calculators.</li>
                <li className="list-item"><span className="bullet-point"></span>Develop finger dexterity and hand-eye coordination.</li>
                <li className="list-item"><span className="bullet-point"></span>Cognitive training with the use of the abacus (visual, auditory processing, attention/concentration)</li>
                <li className="list-item"><span className="bullet-point"></span>Qualities such as perseverance, diligence, tenacity, along with confidence.</li>
              </ul>
              <p>Please feel free to contact us if you need further information.</p>
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 4 })}}
            id="4"
            className="container-fluid block-row bg-abacus">
            <div className="container">
              <br />
              <p className="lead">© 2018 by Abacus Maths Learning Course. All rights reserved.</p>
            </div>
          </div>
        </div>
      )
    }
}

export default Course

