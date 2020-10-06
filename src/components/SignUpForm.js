import React, { useState } from 'react';
import { auth } from '../fbaseConfig';

const SignUpForm = ({ setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log(cred);
      })
      .catch((err) => console.log(err));
    setUserData({
      email,
      password,
    });
  };

  setTimeout(() => {
    console.log('z set timeouta');
    console.log(auth.currentUser);
  }, 5000);

  return (
    <div className="columns is-mobile my-4 ">
      <div className="column is-half is-offset-one-quarter">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">{/* <i className="fas fa-check" /> */}</span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button type="button" className="button is-success" onClick={handleForm}>
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
