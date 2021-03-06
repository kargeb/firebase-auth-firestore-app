import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from './context';

import { auth, db } from './fbaseConfig';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import SignUp from './components/pages/signUp/SignUp';
import SignIn from './components/pages/signIn/SignIn';
import UserDetails from './components/pages/userDetails/UserDetails';
import UserContent from './components/pages/userContent/UserContent';

function App() {
  const [loggedUser, setLoggedUser] = useState({ userId: '', userEmail: '' });
  const [loggedUserContent, setLoggedUserContent] = useState([]);

  useEffect(() => {
    console.log('jestem w useffect');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('JEST ZALOGOANY', user);
        console.log('JEST ZALOGOANY', user.uid);
        setLoggedUser({ userId: user.uid, userEmail: user.email });
        console.log('LOGGEDUSER userID: ', loggedUser.userId);
      } else {
        console.log('NIE JEST ZALGOWANY');
        console.log('USER NIEZALOGOWANY:', user);

        setLoggedUserContent([]);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log('USE EFFECT Z ONSNAPSHOT');
    if (loggedUser.userId) {
      console.log('JEST JAKIS USER!!!!', loggedUser.userId);
      db.collection('app-users')
        .doc(loggedUser.userId)
        .onSnapshot((doc) =>
          console.log('DANE ZE SNAPSHOTA: ', setLoggedUserContent(doc.data().entries)),
        );
    }
  }, [loggedUser.userId]);

  const authData = {
    loggedUser,
    loggedUserContent,
  };

  const UnauthenticatedApp = () => (
    <Router>
      <Navbar loggedUserEmail={loggedUser.userEmail} />
      <SignIn />
      <SignUp />
    </Router>
  );

  const AuthenticatedApp = () => (
    <AuthContext.Provider value={authData}>
      <Router>
        {console.log('DANE Z LoggedUser:', loggedUser)}
        {console.log('DANE LOGGEDUSER z DATABASE:', loggedUserContent)}
        <Navbar loggedUserEmail={loggedUser.userEmail} />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/userdetails">
            <UserDetails />
          </Route>
          <Route path="/usercontent">
            <UserContent />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );

  return <div>{auth.currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
}

export default App;
