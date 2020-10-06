import React, { useState } from 'react';
import CurrentUser from './auth/CurrentUser';

const BottomPanel = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-8 is-offset-2 has-background-primary has-text-centered">
            <button
              type="button"
              className="button is-light"
              onClick={() => setCurrentUser(CurrentUser)}
            >
              Check current user
            </button>
            <span className="subtitle is-3 has-text-centered has-text-white">
              Current user: {currentUser}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomPanel;
