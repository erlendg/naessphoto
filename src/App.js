import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App-parent">
        <div className = "App-header">
          <div className = "App-logo">
          KNLogo
          </div>
        </div>
        <div className = "App-main">
          <div className = "App-menu">
            <nav>Link 1</nav>
            <nav>Link 2</nav>
            <nav>Link 3</nav>
            <nav>Link 4</nav>
          </div>
          <div className = "App-content">
          Main content goes here!
          </div>
          <div className = "App-filler">
          
          </div>
        </div>
        <div className = "App-footer">
          <div className = "App-copyright">
          &copy; Naessphoto
          </div>
        </div>
      
      </div>

    );
  }
}

export default App;
