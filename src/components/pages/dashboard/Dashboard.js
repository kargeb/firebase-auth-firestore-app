import React, { useState } from 'react';
import Hero from '../../Hero';
import UserDataPanel from '../../UserDataPanel';
import BottomPanel from '../../BottomPanel';
import LogOutConfirm from '../../modals/LogOutConfirm';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  return (
    <div>
      <Hero />
      <LogOutConfirm />
      <UserDataPanel userData={userData} />
      <BottomPanel />
    </div>
  );
};

export default Dashboard;
