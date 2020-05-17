import React from 'react';
import './styles.scss';
import logo from './green-logo.svg';

function App() {
  return (
    <div className="login">
      <img src={logo} alt='Green Energy logo' />
      <form>
        <h1>Example login screen</h1>
        <p>Getting started with Green</p>
        <div className="input-container">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="email"
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
