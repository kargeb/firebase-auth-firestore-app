import React, { useState } from 'react';
import Hero from '../../Hero';
import SignUpForm from '../../SignUpForm';
import UserDataPanel from '../../UserDataPanel';
import BottomPanel from '../../BottomPanel';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  return (
    <div>
      <Hero />

      <UserDataPanel userData={userData} />
      <BottomPanel />
    </div>
  );
};

export default Dashboard;
