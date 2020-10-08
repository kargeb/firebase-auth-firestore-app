import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BottomPanel from './components/BottomPanel';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm';
import UserDataPanel from './components/UserDataPanel';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SignUpForm setUserData={setUserData} />
      <UserDataPanel userData={userData} />
      <BottomPanel />
    </div>
  );
}

export default App;
