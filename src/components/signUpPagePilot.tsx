import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserPool from './userPool';

const signUpPagePilot = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event:any) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="email">
          Email
          <input className="input" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input className="input" type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label htmlFor="password">
          Repeat Password
          <input className="input" type="text" />
        </label>
        Gender
        <label htmlFor="password">
          male
          <input className="input" type="radio" />
          female
          <input className="input" type="radio" />
        </label>
        <label htmlFor="password">
          Do you have drone pilot licence
          <input className="input" type="checkbox" />
        </label>

        <button type="submit" onClick={() => navigate('/logged-in-page')}>Sign up</button>
      </form>
    </div>

  );
};

export default signUpPagePilot;
