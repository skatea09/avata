import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {console.log('here tho')}
        <header className="App-header">
          <p className="text-red">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link text-red"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
