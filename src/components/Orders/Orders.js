import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderList from './OrderList'

class Orders extends Component {

  componentDidMount(){
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>
        <div className="container-fluid block-row bg-order">
          <div className="container">
            <div className="title-area">
              <h1 className="display-4">Orders</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid block-row">
          <div className="container">
            <OrderList />
          </div>
        </div>
      </div>
    )
  }
}

export default Orders

