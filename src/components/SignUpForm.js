import React, { useState } from 'react';

const SignUpForm = ({ handleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <h1 className="label is-large has-text-centered mb-5">Create account</h1>
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
          <button
            type="button"
            className="button is-success"
            onClick={() => handleForm(email, password)}
          >
            Register
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
