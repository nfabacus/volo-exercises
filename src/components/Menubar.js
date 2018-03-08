import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle=()=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div
          className={`menubar-btn ${this.state.isOpen?"rotate-in-diag-2":"rotate-in-hor"}`}
          onClick={this.toggle}
        >
          <div class={this.state.isOpen?"":"hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class={this.state.isOpen?"cross":""}>
            <span></span>
            <span></span>
          </div>
        </div>
        {
          this.state.isOpen&&
          <div className="menubar-modal">
            <Nav className="m-auto" navbar>
              <NavItem className="menubar-item focus-in-contract-bck">
                <Link onClick={this.toggle} to="/">Home</Link>
              </NavItem>
              <NavItem className="menubar-item focus-in-contract-bck">
                <Link  onClick={this.toggle} to="/about">About</Link>
              </NavItem>
            </Nav>
          </div>
        }
        <div className="menubar">
            <div className="menubar-link-group">
                <Link className="menubar-link-item" to="/">Home</Link>
                <Link className="menubar-link-item" to="/about">About</Link>
            </div>
        </div>
      </div>
    );
  }
}