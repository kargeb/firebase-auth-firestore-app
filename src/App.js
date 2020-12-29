import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { auth } from './fbaseConfig';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import SignUp from './components/pages/signUp/SignUp';
import SignIn from './components/pages/signIn/SignIn';
import UserDetails from './components/pages/userDetails/UserDetails';
import UserContent from './components/pages/userContent/UserContent';

export const AuthContext = React.createContext();

function App() {
  const [loggedUserEmail, setLoggedUserEmail] = useState(null);
  const [loggedUserId, setLoggedUserId] = useState(null);

  useEffect(() => {
    console.log('jestem w useffect');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('JEST ZALOGOANY', user);
        console.log('JEST ZALOGOANY', user.uid);
        setLoggedUserEmail(user.email);
        setLoggedUserId(user.uid);
      } else {
        console.log('NIE JEST ZALGOWANY');
        setLoggedUserEmail(null);
        setLoggedUserId(null);
      }
    });

    return unsubscribe;
  }, []);

  const authData = {
    loggedUserEmail,
    loggedUserId,
  };

  const UnauthenticatedApp = () => (
    <Router>
      <Navbar loggedUserEmail={loggedUserEmail} />
      <SignIn />
    </Router>
  );

  const AuthenticatedApp = () => (
    <AuthContext.Provider value={authData}>
      <Router>
        <Navbar loggedUserEmail={loggedUserEmail} />
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
