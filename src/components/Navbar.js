import React from 'react';
import CurrentUser from './auth/CurrentUser';

const Navbar = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item has-text-weight-bold is-size-5 is-vcentered">
          React Firebase Auth
        </div>
        <a href="/" className="navbar-item ml-6">
          Home
        </a>
        <a href="#" className="navbar-item">
          User details
        </a>
        <a href="#" className="navbar-item">
          User content
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light" onClick={CurrentUser}>
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
