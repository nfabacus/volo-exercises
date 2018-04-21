import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Scrollchor from 'react-scrollchor'

class Abacus extends Component {

    state={
      section: 0
    }

    componentDidMount(){
      window.scrollTo(0,0)
    }

    handleScrollClick=()=>{
      console.log("Clicked!", this.state.section)
      const nextSection = this.state.section>=3?0:this.state.section+1
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
              <span className={ this.state.section>=3?"up-arrow":"down-arrow" } >
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
            className="container-fluid block-row bg-abacus1">
            <div className="container">
              <div className="title-area">
                <h1 className="display-4">The Soroban Abacus</h1>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 1 })}}
            id="1" className="container-fluid block-row bg-blueviolet slope-open-right"
          >
            <div className="container">
              <h2>What is the Soroban Abacus?</h2>
              <p>The soroban abacus is a traditional Japanese calculating tool, originally introduced to Japan from China around the 16th century. It was refined over time and spread across Asia and the world.​</p>
              <p>Even in the present era of computers and calculators, the ancient art of abacus has survived and is once again beginning to be appreciated (or rediscovered) as an excellent educational and mental arithmetic tool.</p>
              <p>Today, the soroban abacus is taught in schools and after-school programmes in many parts of Asia, including Japan, China, Taiwan, Malaysia, Singapore, and India. It has also been introduced to Western countries in recent years.​</p>
            </div>
          </div>
          <div className="container-fluid block-row bg-abacus7">
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 2 })}}
            id="2" className="container-fluid block-row slope-open-left bg-white color-grey"
          >
            <div className="container">
              <h2>How does it work? How does it benefit my children?</h2>
              <p>On the abacus, any numbers can be visually represented by beads, which allows its user to solve problems of addition, subtraction, multiplication, division, etc. by moving the positions of the beads. The abacus engages the visual, tactile and auditory senses of the child operating it, giving the meaning and logic to the number operations. Therefore it does not only suit visual/spatial learners, who may have struggled with traditional maths teaching, but also anybody who can benefit from the potential of their right brain thinking (visualisation, imagination, and visual pattern recognition) to accelerate their learning.  Because it is a multi-sensory method, it is not only a proven way of boosting children’s understanding of numbers and calculation skills but also a fun way to learn the foundations of maths.</p>
              <p>Learning the abacus can be seen as similar to learning a musical instrument, it is an art as much as a science, and one that requires children to regularly practice to develop their skill. In the abacus class, children will start by learning to manipulate the beads to perform calculations quickly and accurately, moving towards being able to perform the same calculations in their heads. With practice any child can learn to do complex mental arithmetic. The basic concepts of numbers and their relationships can be very difficult to grasp for young children – which can lead to a lack of confidence. The abacus, by making numbers concrete, quickly and accurately conveys number concepts.</p>
              <p>As with musical instruments, it requires children’s finger dexterity, hand-eye coordination, concentration, patience, consistency (diligence) and even humbleness and openness (to learn something from the beginning in a different way, esp older children).  It will be simply misleading to say that it does not require efforts and perseverance, which are on the contrary encouraged and embraced as qualities that can be developed within each abacus learner – by not just calculating in head but using the abacus.</p>
              <p>This course also helps children to work on word problems as well as to learn other basic mathematical concepts, focusing on the relational aspects of numbers, language, and space-time. By making sure that your children consolidate their mathematical foundations, the course aims to boost the children’s self-confidence and belief in their potential and mathematical ability.</p>
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 3 })}}
            id="3"
            className="container-fluid block-row bg-abacus1">
            <div className="container">
              <br />
              <p className="lead">© 2018 by Abacus Maths Learning Course. All rights reserved.</p>
            </div>
          </div>
        </div>
      )
    }
}

export default Abacus

