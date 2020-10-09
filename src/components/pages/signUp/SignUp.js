import React from 'react';
import { createNewUser } from '../../auth/authHandlers';
import EmailAndPasswordForm from '../../common/forms/EmailAndPasswordForm';

const SignUp = () => {
  const handleForm = (email, password) => {
    createNewUser(email, password);
  };

  return (
    <div className="columns is-mobile my-4 ">
      <div className="column is-4 is-offset-4">
        <EmailAndPasswordForm
          handleForm={handleForm}
          titleText="Create account"
          buttonText="Register"
        />
      </div>
    </div>
  );
};

export default SignUp;
