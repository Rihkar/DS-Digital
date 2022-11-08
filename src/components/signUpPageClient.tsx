/* eslint-disable global-require */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import UserPool from './userPool';

const signUpPageClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNr, setphoneNr] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  // Modules, e.g. Webpack:
  const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
  // const { CognitoUserPool } = AmazonCognitoIdentity;

  const attributeList:any = [];
  const dataName = {
    Name: 'name',
    Value: name,
  };
  const dataEmail = {
    Name: 'email',
    Value: email, // your email here
  };
  const dataPhoneNumber = {
    Name: 'phone_number',
    Value: phoneNr, // your phone number here with +country code and no delimiters in front

  };
  const dataCompanyName = {
    Name: 'custom:Company',
    Value: companyName,
  };
  const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
  const attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);
  const attributeCompanyName = new AmazonCognitoIdentity.CognitoUserAttribute(dataCompanyName);
  const attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);

  attributeList.push(attributeEmail);
  attributeList.push(attributePhoneNumber);
  attributeList.push(attributeCompanyName);
  attributeList.push(attributeName);

  const onSubmit = (event:any) => {
    event.preventDefault();

    UserPool.signUp(email, password, attributeList, null, (err, data) => {
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
          <input className="input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label htmlFor="name">
          Name
          <input className="input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label htmlFor="companyName">
          Company name
          <input className="input" type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
        </label>

        <label htmlFor="password">
          Password
          <input className="input" type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label htmlFor="phoneNr">
          Phone number
          <input className="input" type="text" value={phoneNr} onChange={(event) => setphoneNr(event.target.value)} />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </div>

  );
};

export default signUpPageClient;
