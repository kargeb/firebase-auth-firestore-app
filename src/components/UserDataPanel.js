import React from 'react';

const UserDataPanel = ({ userData }) => {
  return (
    <div className="columns is-mobile my-4 ">
      <div className="column is-half is-offset-one-quarter">
        {userData.email && (
          <div className="notification is-warning">
            <p>
              <strong>User email: </strong>
              {userData.email}
            </p>
            <p>
              <strong>User password: </strong>
              {userData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDataPanel;
