/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import classnames from 'classnames';

const LogOutConfirm = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleModalClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={classnames('modal', { 'is-active': isActive })}>
        <div className="modal-background is-warning " onClick={handleModalClose} />
        <div className="modal-content has-background-danger p-6">
          Any other Bulma elements you want
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

export default LogOutConfirm;
