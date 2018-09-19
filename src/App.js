import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import MarketOverview from './components/market_overview';
import LiquidityAnalysis from './components/liquidity_analysis';

// parent component
class App extends Component {
  render() {
    return (
      	<div>
			<Navigation/>
			<MarketOverview/>
			<LiquidityAnalysis/>
      	</div>
    );
  }
}

export default App;
 