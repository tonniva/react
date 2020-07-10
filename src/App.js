import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href={`https://access.line.me/oauth2/v2.1/authorize?response_type=code&bot_prompt=normal&client_id=1653990268&redirect_uri=${window.location.origin}&scope=openid%20profile&nonce=oXd25630710034538&state=line_authorize`}> click accessline me m150 mer</a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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

export default App;
