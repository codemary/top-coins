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
				</Navbar>
			</div>
		);
	}
}

class MarketOverview extends Component {
	render() {
		return (
			<div className="Table">
				<Table 
					responsive
					bordered
					condensed
					hover
					striped
				>
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th>Price</th>
							<th>Price Change (24th)</th>
							<th>Market Cap</th>
							<th>Volume (24th)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Bitcoin</td>
							<td>$6,764.99</td>
							<td>-4.41%</td>
							<td>$114,784,460,451</td>
							<td>$4,551,630,000</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Ethereum</td>
							<td>$395.74</td>
							<td>-1.04%</td>
							<td>$39,064,506,094</td>
							<td>$1,367,120,000</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

class App extends Component {
  render() {
    return (
      	<div>
			<Navigation></Navigation>
			<MarketOverview></MarketOverview>
      	</div>
    );
  }
}

export default App;
 