import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import MarketOverview from './market_overview';
import LiquidityAnalysis from './liquidity_analysis';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {

    state = {
        market_overview_data: [],
        liquidity_data: [],
        limit: 10,
    }

    fetchTickerData = () => {
        let liquidity_data = [];
        let market_overview_data = [];

        fetch('https://api.coinmarketcap.com/v2/ticker/?limit=' + this.state.limit)
            .then(response => response.json())
            .then(ticker_data => {
                // transform api data
                Object.keys(ticker_data.data).forEach(key => {
                    let val = ticker_data.data[key];
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
       },()=> {
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
                                    <a href="/">Top Coins</a>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Nav>
                                {/* fix nested a tag issue: https://stackoverflow.com/questions/42561137/link-cannot-appear-as-a-descendant-of-a-link */}
                                <NavItem componentClass='span' eventKey={1} href="#">
                                    <Link to="/">Market Overview</Link>
                                </NavItem>
                                <NavItem componentClass='span' eventKey={2} href="#">
                                    <Link to="/liquidity">Liquidity Analysis</Link>
                                </NavItem>
                            </Nav>
                            <Nav pullRight>
                            <NavItem>
                                <p >Coin Limit</p>
                            </NavItem>
                            <NavItem>
                                <select onChange={this.handleSelect} value={this.state.limit}>
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

export default Navigation;