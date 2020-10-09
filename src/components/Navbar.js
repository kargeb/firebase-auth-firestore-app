import React from 'react';
import { Link } from 'react-router-dom';
import LogOutModal from './modals/LogOutModal';
import { auth } from '../fbaseConfig';

const Navbar = ({ loggedUser }) => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    {console.log('Current USER z NAV: ', loggedUser)}
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
        <Link to="/" className="navbar-item ml-6">
          Home
        </Link>
        {loggedUser && (
          <>
            <Link to="/" className="navbar-item">
              User details
            </Link>
            <Link to="/" className="navbar-item">
              User content
            </Link>
          </>
        )}
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {loggedUser ? (
              <LogOutModal> Log out </LogOutModal>
            ) : (
              <>
                <Link to="/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>

                <Link to="/signin" className="button is-light">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
