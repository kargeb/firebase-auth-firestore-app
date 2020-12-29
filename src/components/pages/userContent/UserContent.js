import React, { useContext, useState, useEffect } from 'react';
import { db, mergeArray } from '../../../fbaseConfig';
import { getUserNameAndId } from '../../database/firestoreHandlers';
import { AuthContext } from '../../../App';

const UserContent = () => {
  const fromContext = useContext(AuthContext);

  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState([]);
  const [update, setUpdate] = useState(null);

  const handleClick = () => {
    console.log('TO WPISANE JEST:', inputValue);
    db.collection('app-users')
      .doc(fromContext.loggedUserId)
      .update({
        entries: mergeArray(inputValue),
      })
      .then(() => fromContext.updateUserContent(fromContext.loggedUserId));
    setInputValue('');
  };

  // useEffect(() => {
  //   if (fromContext.loggedUserId) {
  //     console.log('UID Z USEFECT------> ', fromContext.loggedUserId);

  //     getUserNameAndId(fromContext.loggedUserId).then((cos) => setUserData(cos.entries));
  //   }
  // }, [fromContext, update]);

  return (
    <section className="section">
      {console.log('USER WNTRIESSSSSSS', userData)}
      {console.log('DANE Z CONTEXTU USERA: ', fromContext.loggedUserContent)}
      <div className="container">
        <h1 className="subtitle is-2">user: {fromContext.loggedUserEmail || 'no user'}</h1>
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
