import React from 'react';
import { auth } from '../../../fbaseConfig';
import SignUpForm from '../../SignUpForm';

const SignUp = () => {
  const handleForm = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('STWORZYLEM UZYTKONIWKA', cred);
        console.log(cred);
      })
      .catch((err) => console.log(err));
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
