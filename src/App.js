import React, {Component} from 'react';
import {render} from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=XtAhISkoJZc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello Laurie :)
          </a>
        </header>
      </div>
    );
  }
}


export default App;
