import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       
          <img src={logo} className="App-logo" alt="logo" />
          <input placeholder = "Search Blood Type" /> <br/>
          <button> Become a Donor </button> &nbsp; &nbsp;
          <button> Request Blood </button>
      </div>
    );
  }
}

export default App;
