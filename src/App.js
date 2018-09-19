import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      	<div className="App">
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
					<a href="#">Top Coins</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
			<Nav>
				<NavItem eventKey={1} href="#">
					Market Overview
				</NavItem>
				<NavItem eventKey={2} href="#">
					Liquidity Analysis Page
				</NavItem>
			</Nav>
			<Nav pullRight>
				<NavDropdown eventKey={3} title="Coin Limit" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>10</MenuItem>
					<MenuItem eventKey={3.2}>50</MenuItem>
					<MenuItem eventKey={3.3}>all</MenuItem>
				</NavDropdown>
			</Nav>
			</Navbar>;
      	</div>
    );
  }
}

export default App;
