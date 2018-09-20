import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import MarketOverview from './components/market_overview';
import LiquidityAnalysis from './components/liquidity_analysis';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
// fix issue https://stackoverflow.com/questions/40126367/jest-typeerror-network-request-failed-for-fetch/40127203
import fetch from 'isomorphic-fetch';

class App extends Component {

	state = {
		market_overview_data: [],
		liquidity_data: [],
		limit: 10
	}

	fetchTickerData = () => {
		let liquidity_data = [];
		let market_overview_data = [];

		fetch('https://api.coinmarketcap.com/v2/ticker/?&limit=' + this.state.limit)
			.then(response => response.json())
			.then(ticker_data => {

				// transform coin api data
				let coin_data = []
				Object.keys(ticker_data.data).forEach(key => {
					let val = ticker_data.data[key];
					coin_data.push(val)
				});

				// sort coins by rank
				let coin_data_sorted = coin_data.sort((x, y) => x.rank - y.rank)

				coin_data_sorted.forEach(val => {
					let quote = val.quotes.USD;
					let dot = {
						coin: val.name,
						x: quote.market_cap,
						y: quote.volume_24h,
						z: quote.percent_change_24h
					};
					let market_overview = {
						rank: val.rank,
						name: val.name,
						price: quote.price,
						price_change_24h: quote.percent_change_24h,
						market_cap: quote.market_cap,
						volume_24h: quote.volume_24h
					}
					// push item to liquidity_data
					liquidity_data.push(dot)
					// push item to market_overview
					market_overview_data.push(market_overview)
				});


				this.setState({
					market_overview_data: market_overview_data,
					liquidity_data: liquidity_data,
				})
			});
	}

	componentDidMount() {
		this.fetchTickerData()
	}


	handleSelect = (event) => {
		this.setState({
			limit: event.target.value,
		}, () => {
			this.fetchTickerData()
		})
	}



	render() {

		return (
			<div>
				<Router>
					<div>
						{/* header */}
						<Navbar>
							<Navbar.Header>
								<Navbar.Brand>
									<a style={{ color: "white" }} href="/">Top Coins</a>
								</Navbar.Brand>
								<Navbar.Toggle />
							</Navbar.Header>
							<Nav>
								{/* fix nested a tag issue: https://stackoverflow.com/questions/42561137/link-cannot-appear-as-a-descendant-of-a-link */}
								<NavItem componentClass='span' eventKey={1}>
									<NavLink
										style={{
											color: '#b2bec3',
										}}
										activeStyle={{
											fontSize: '16px',
											fontFamily: 'sans-serif',
											color: 'white'
										}}
									exact
									to="/">Market Overview</NavLink>
								</NavItem>
								<NavItem componentClass='span' eventKey={2}>
									<NavLink 
										style={{
											color: '#b2bec3',
										}}
										activeStyle={{
											fontSize: '16px',
											fontFamily: 'sans-serif',
											color: 'white'
										}}
									exact
									to="/liquidity">Liquidity Analysis</NavLink>
								</NavItem>
							</Nav>
							<Nav pullRight>
								<NavItem disabled>
									<span style={{ color: "white" }} >Coin Limit</span>
								</NavItem>
								<NavItem>
									<select className="styled-select" onChange={this.handleSelect} value={this.state.limit}>
										<option value="10">10</option>
										<option value="50">50</option>
										<option value="all">all</option>
									</select>
								</NavItem>
							</Nav>
						</Navbar>
						<Route exact path="/" render={(props) => <MarketOverview {...props} data={this.state.market_overview_data} />} />
						<Route path="/liquidity" render={(props) => <LiquidityAnalysis {...props} data={this.state.liquidity_data} />} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;