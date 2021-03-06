import React, { useContext, useState, useEffect } from 'react';
import { db, mergeArray } from '../../../fbaseConfig';
import { AuthContext } from '../../../context';

const UserContent = () => {
  const fromContext = useContext(AuthContext);

  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState([]);
  const [update, setUpdate] = useState(null);

  const handleClick = () => {
    console.log('TO WPISANE JEST:', inputValue);
    db.collection('app-users')
      .doc(fromContext.loggedUser.userId)
      .update({
        entries: mergeArray(inputValue),
      });
    // .then(() => fromContext.updateUserContent(fromContext.loggedUser.userId));
    setInputValue('');
  };

  return (
    <section className="section">
      {console.log('USER WNTRIESSSSSSS', userData)}
      {console.log('DANE Z CONTEXTU USERA: ', fromContext.loggedUserContent)}
      <div className="container">
        <h1 className="subtitle is-2">user: {fromContext.loggedUser.userEmail || 'no user'}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Wpisz co:
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </label>
          <button type="button" onClick={handleClick}>
            Dodaj
          </button>
        </form>
        <h3 className="is-size-5 mt-4 mb-2">Wpisy:</h3>
        <ul>
          {fromContext.loggedUserContent &&
            fromContext.loggedUserContent.map((entry) => (
              <li key={entry}>
                <p>{entry}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default UserContent;
