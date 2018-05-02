import React, { Component } from 'react'

class Contact extends Component {

    componentDidMount(){
      window.scrollTo(0,0)
    }

    render() {
      return (
        <div>
          <div className="container-fluid block-row bg-contact">
            <div className="container">
              <div className="title-area">
                <h1 className="display-4">Contact us</h1>
              </div>
            </div>
          </div>
          <div className="container-fluid block-row">
            <div className="container">
              <p>Lorem ipsum dolor amet tousled street art hot chicken hashtag, prism roof party readymade direct trade normcore palo santo shaman. Butcher quinoa DIY you probably haven't heard of them echo park lomo chartreuse, brooklyn tote bag. Organic af neutra listicle, succulents pitchfork shabby chic migas gluten-free kale chips. Farm-to-table bespoke YOLO chicharrones prism twee XOXO umami succulents la croix shabby chic street art mustache +1.</p>
              <p>Scenester tbh occupy, man braid vegan shaman truffaut umami edison bulb semiotics offal. Whatever enamel pin tote bag, tbh letterpress meditation vice cred subway tile organic. Copper mug vice distillery health goth franzen authentic snackwave gastropub 90's dreamcatcher tofu knausgaard chicharrones. Knausgaard lyft chia, pinterest microdosing cornhole af narwhal jianbing iceland taxidermy YOLO seitan viral wolf. Slow-carb stumptown taxidermy retro mlkshk wayfarers chambray.</p>
            </div>
          </div>
        </div>
      )
    }
}

export default Contact

