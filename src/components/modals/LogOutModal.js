/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import classnames from 'classnames';
import { logoutUser } from '../auth/authHandlers';

const LogOutModal = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleModalClose = () => {
    setIsActive(false);
  };

  const handleLogOut = () => {
    logoutUser();
    setIsActive(false);
  };

  return (
    <>
      <div className={classnames('modal', { 'is-active': isActive })}>
        <div className="modal-background is-warning " onClick={handleModalClose} />
        <div className="modal-content has-text-centered has-background-light p-6">
          <p className="subtitle">Are you sure you want to log out?</p>
          <div className="buttons is-centered">
            <button
              type="button"
              className="button is-danger is-outlined mr-6"
              onClick={handleModalClose}
            >
              No
            </button>
            <button type="button" className="button is-success is-outlined " onClick={handleLogOut}>
              Yes
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleModalClose}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
      <button type="button" className="button is-light" onClick={() => setIsActive(true)}>
        {children}
      </button>
    </>
  );
};

export default LogOutModal;
