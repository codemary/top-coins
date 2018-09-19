import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import MarketOverview from './market_overview';
import LiquidityAnalysis from './liquidity_analysis';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
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
                                <NavItem eventKey={1} href="#">
                                    <Link to="/">Market Overview</Link>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <Link to="/liquidity">Liquidity Analysis</Link>
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
                        <Route exact path="/" component={MarketOverview} />
                        <Route path="/liquidity" component={LiquidityAnalysis} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navigation;