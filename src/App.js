import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { auth } from './fbaseConfig';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import SignUp from './components/pages/signUp/SignUp';
import SignIn from './components/pages/signIn/SignIn';
import Hero from './components/pages/dashboard/hero/Hero';

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    console.log('jestem w useffect');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('JEST ZALOGOANY', user);
        setLoggedUser(user.email);
      } else {
        console.log('NIE JEST ZALGOWANY');
        setLoggedUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Navbar loggedUser={loggedUser} />
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
      </Switch>
    </Router>
  );
}

export default App;
