import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Table} from 'react-bootstrap';

class Navigation extends Component {
	render() {
		return (
			<div>
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

class App extends Component {
  render() {
    return (
      	<div className="App">
			<Navigation></Navigation>
      	</div>
    );
  }
}

export default App;
 