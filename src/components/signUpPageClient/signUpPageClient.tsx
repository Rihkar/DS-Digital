/* eslint-disable max-len */
/* eslint-disable global-require */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signUpClientCSS from './signUpPageClient.module.scss';
import UserPool from '../userPool';

const signUpPageClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNr, setphoneNr] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

  const attributeList:any = [];
  const dataName = {
    Name: 'name',
    Value: name,
  };
  const dataEmail = {
    Name: 'email',
    Value: email,
  };
  const dataPhoneNumber = {
    Name: 'phone_number',
    Value: phoneNr,

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
    <div className={signUpClientCSS.container}>
      <form className={signUpClientCSS.form} onSubmit={onSubmit}>
        <div className={signUpClientCSS.form_title}>SIGN UP</div>
        <label htmlFor="email">
          Email
          <input required className={signUpClientCSS.input} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label htmlFor="name">
          Name
          <input required className={signUpClientCSS.input} type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label htmlFor="companyName">
          Company name
          <input required className={signUpClientCSS.input} type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
        </label>

        <label htmlFor="password">
          Password
          <input required className={signUpClientCSS.input} type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label htmlFor="phoneNr">
          Phone number
          <input required className={signUpClientCSS.input} type="text" value={phoneNr} onChange={(event) => setphoneNr(event.target.value)} />
        </label>

        <button className={signUpClientCSS.sign_up_button} type="submit">SIGN UP</button>
      </form>
    </div>

  );
};

export default signUpPageClient;
