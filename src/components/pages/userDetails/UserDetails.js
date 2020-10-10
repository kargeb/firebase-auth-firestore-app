import React, { useContext, useEffect, useState } from 'react';
import { getUserNameAndId } from '../../database/firestoreHandlers';
import { AuthContext } from '../../../App';

const UserDetails = () => {
  const [userFromDb, setUserFromDb] = useState(null);
  const fromContext = useContext(AuthContext);

  useEffect(() => {
    if (fromContext.loggedUserId) {
      console.log('UID Z USEFECT------> ', fromContext.loggedUserId);

      getUserNameAndId(fromContext.loggedUserId).then((cos) => setUserFromDb(cos.email));
    }
  }, [fromContext]);

  return (
    <section className="section">
      {console.log('C CONTEXTU W USERDETALIS: ', fromContext)}
      <div className="container has-text-centered">
        <h1 className="title is-1">Name: {fromContext.loggedUserEmail}</h1>

        <h3 className="subtitle is-3">ID: {fromContext.loggedUserId}</h3>
        <h3 className="subtitle is-3">IDz firestore: {userFromDb}</h3>
      </div>
    </section>
  );
};

export default UserDetails;
