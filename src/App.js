import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { auth } from './fbaseConfig';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import SignUp from './components/pages/signUp/SignUp';
import SignIn from './components/pages/signIn/SignIn';

function App() {
  useEffect(() => {
    console.log('jestem w useffect');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('JEST ZALOGOANY', user);
      } else {
        console.log('NIE JEST ZALGOWANY');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
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
      </div>
    </Router>
  );
}

export default App;
