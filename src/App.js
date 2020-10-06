import React, { useState } from 'react';
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
    </div>
  );
}

export default App;
