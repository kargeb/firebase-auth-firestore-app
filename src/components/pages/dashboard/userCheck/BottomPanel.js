import React, { useState } from 'react';
import { GetCurrentUser } from '../../../auth/authHandlers';

const BottomPanel = () => {
  const [currentUser, setGetCurrentUser] = useState(null);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-8 is-offset-2 has-background-primary has-text-centered">
            <button
              type="button"
              className="button is-light"
              onClick={() => setGetCurrentUser(GetCurrentUser)}
            >
              Check current user
            </button>
            <span className="is-size-4 pl-4 has-text-centered has-text-white">
              Current user: <span className="is-italic pl-4">{currentUser}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomPanel;
