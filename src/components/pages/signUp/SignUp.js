import React from 'react';
import { createNewUser } from '../../auth/authHandlers';
import SignUpForm from '../../SignUpForm';

const SignUp = () => {
  const handleForm = (email, password) => {
    createNewUser(email, password);
  };

  return (
    <div className="columns is-mobile my-4 ">
      <div className="column is-4 is-offset-4">
        <SignUpForm handleForm={handleForm} />
      </div>
    </div>
  );
};

export default SignUp;
