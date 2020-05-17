import React from 'react';
import './styles/styles.scss';
import logo from './green-logo.svg';

function App() {
  return (
    <div className="login">
      <img src={logo} alt='Green Energy logo' />
      <form>
        <h1>Example login screen</h1>
        <p>Getting started with Green</p>
        <div className="input-container">
          <label for="email">Email Address</label>
          <input
            class=""
            type="email"
            id="email"
            pattern=".+@globex.com"
            size="30"
            required
          />
        </div>
        <div className="checkbox-container">
          <label>Remember this device</label>
          <input
            type="checkbox"
          />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default App;
