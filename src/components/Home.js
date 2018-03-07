import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from 'react-springy-parallax'
import Header from './Header'

class Home extends React.Component {
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
            <Parallax className="overflowY-hidden" ref="parallax" pages={3}>

                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                    <Header />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    <div className="container">
                      <h4>
                        Abacus x Maths Learning is a unique maths enrichment course, mainly aimed at primary school aged children. 
                      </h4>
                      <h4>
                        Through the use of the Japanese Abacus and other materials, the course is designed to help children excel with their mental arithmetic, school maths, and even other subjects, by developing their concentration, reasoning, visualisation (creativity), and tenacity.
                      </h4>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    © 2018 by Abacus Maths Learning Course. All rights reserved.
                </Parallax.Layer>

            </Parallax>
        )
    }
}


export default Home

