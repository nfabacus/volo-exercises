import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Scrollchor from 'react-scrollchor'

class Contact extends Component {

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
            className="container-fluid block-row bg-contact">
            <div className="container">
              <div className="title-area">
                <h1 className="display-4">Contact us</h1>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 1 })}}
            id="1" className="container-fluid block-row bg-blueviolet slope-open-right"
          >
            <div className="container">
              <p>For a non-obligatory information & trial session, course booking and further details, <br/>please contact:</p>
              <p>
                <b>Abacus Learning Course</b><br/>
                Tel: 01442 800 808<br/>
                Email: <a href="mailto:contact@abacusmaths.info">contact@abacusmaths.info</a><br/>
                Website: <a href="https://www.abacusmaths.info">www.abacusmaths.info</a><br/>
              </p>
            </div>
          </div>
          <div className="container-fluid block-row bg-instructor">
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 2 })}}
            id="2" className="container-fluid block-row slope-open-left bg-white color-grey"
          >
            <div className="container">
              <h2>About the Course Instructor</h2>
              <img className="float-right m-2" style={{maxWidth: "40%"}} src={require('../assets/abacus_teacher.jpg')} alt="abacus instructor" />
              <p>Nobuyuki Fujioka, a father of two originally from Japan, rediscovered from his cultural roots the significant benefits of the ancient art of soroban abacus on children’s education and confidence. In 2010, he decided to start this course in the hope of introducing the abacus to benefit children in Hemel Hempstead, its neighbouring areas, and across the UK.</p>
              <p>He researched materials and teaching practices from Japan and programmes in the UK and around the world. He received intensive abacus training and mentorship from Ms.Kimie Markarian, the leading abacus expert & teacher in the UK, who appeared on BBC Blue Peter & “The Story of One” by Terry Jones, and who has published books in collaboration with the Association of Teachers of Mathematics.</p>
              <p>Nobuyuki has a Masters Degree from the University of Sussex, and was also educated at universities in the US and France.  He is a member of International Soroban Diffusion Foundation, and occasionally travels back to Japan for further research and training on the soroban abacus.</p>
              <p>He is also a professional web developer, trying to combine his passion for web technologies and abacus maths.</p>
            </div>
          </div>
          <div
            onMouseEnter={()=>{this.setState({ section: 3 })}}
            id="3"
            className="container-fluid block-row bg-contact">
            <div className="container">
              <br />
              <p className="lead">© 2018 by Abacus Maths Learning Course. All rights reserved.</p>
            </div>
          </div>
        </div>
      )
    }
}

export default Contact

