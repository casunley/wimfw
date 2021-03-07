import React, {Component} from 'react';
import './App.css';
class App extends Component {

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //   </header>
      // </div>
      <div className="header">
        <h1>Where the fuck is your wallet?</h1>
        <div>
          <button className = "adviceButtons">
            Help me find this shit
          </button>
          <button className = "adviceButtons" >
            I don't have a fucking wallet
          </button>
        </div>
      </div>
    );
  }
}


export default App;
