import React, { useContext } from 'react';
import { AuthContext } from '../../../context';

const UserDetails = () => {
  const fromContext = useContext(AuthContext);

  return (
    <section className="section">
      {console.log('C CONTEXTU W USERDETALIS: ', fromContext)}
      <div className="container has-text-centered">
        <h1 className="title is-1">Name: {fromContext.loggedUser.userEmail}</h1>

        <h3 className="subtitle is-3">ID: {fromContext.loggedUser.userId}</h3>
      </div>
    </section>
  );
};

export default UserDetails;
