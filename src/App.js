import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from 'react-bootstrap';

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
        </Navbar>;
      </div>
    );
  }
}

export default App;
