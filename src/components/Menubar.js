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

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        {
          this.state.isOpen&&
          <div className="menubar-modal">
            <p
              onClick={this.toggle}
              className="menubar-btn">
              X
            </p>
            <Nav className="m-auto" navbar>
              <NavItem className="menubar-item focus-in-contract-bck">
                <Link onClick={this.toggle} to="/">Home</Link>
              </NavItem>
              <NavItem className="menubar-item focus-in-contract-bck">
                <Link  onClick={this.toggle} to="/misson">Misson</Link>
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

                <Link className="menubar-link-item" to="/misson">Misson</Link>

                <Link className="menubar-link-item" to="/about">About</Link>
            </div>
            <div
              className="menubar-btn"
              onClick={this.toggle}
            >
              Menu
            </div>
        </div>
      </div>
    );
  }
}