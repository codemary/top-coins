import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import MarketOverview from './components/market_overview';

// parent component
class App extends Component {
  render() {
    return (
      	<div>
			<Navigation/>
			<MarketOverview/>
      	</div>
    );
  }
}

export default App;
 