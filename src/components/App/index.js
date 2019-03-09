import React, { Component } from 'react';
import MembersList from '../MembersList';
import logo from '../../assets/devmt.jpg';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-section App-header">
          <img src={logo} className="App-logo" alt="DevMT" />
        </header>
        <section className="App-section App-content">
          <MembersList />
        </section>
      </div>
    );
  }
}

export default App;
