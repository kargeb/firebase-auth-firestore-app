import React from 'react';
import { signInUser } from '../../auth/authHandlers';
import EmailAndPasswordForm from '../../common/forms/EmailAndPasswordForm';

const SignIn = () => {
  const handleForm = (email, password) => {
    signInUser(email, password);
  };

  return (
    <div className="columns is-mobile my-4 ">
      <div className="column is-4 is-offset-4">
        {/* <SignInForm handleForm={handleForm} /> */}
        <EmailAndPasswordForm handleForm={handleForm} titleText="Login" buttonText="Sign in" />
      </div>
    </div>
  );
};

export default SignIn;
