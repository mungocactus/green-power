import React from 'react';
import './styles/styles.scss';
import logo from './green-logo.svg';

class App extends React.Component {
  constructor() {
    super();
    this.validateForm = this.validateForm.bind(this);
  }

  emailInput = React.createRef();

  validateForm(e) {
    e.preventDefault();
    const emailInput = this.emailInput.current.value;
    const emailRegex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    const signInBtn = document.querySelector('#signin');

    if (emailInput.match(emailRegex) !== null) {
      signInBtn.disabled = false;
    } else {
      signInBtn.disabled = true;
    }
  }

  render() {
    return (
      <div className="login">
        <img src={logo} alt='Green Energy logo' />
        <form>
          <h1>Example login screen</h1>
          <p>Getting started with Green</p>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input
            type="email"
            id="email"
            ref={this.emailInput}
            onChange={this.validateForm}
            required
            />
          </div>
          <div className="checkbox-container">
            <label htmlFor="remember">Remember this device</label>
            <input
            type="checkbox"
            id="remember"
            />
            </div>
          <button type="submit" id="signin" disabled>Sign In</button>
        </form>
      </div>
    );
  }
}

export default App;
