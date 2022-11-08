import './Styles/reset.scss';
import './App.scss';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useState } from 'react';
import Client from './components/client';
import Admin from './components/admin';
import Pilot from './components/pilot';
import SignUpPageClient from './components/signUpPageClient';
import SignUpPagePilot from './components/signUpPagePilot';
import LoggedInPage from './components/loggedInPage';
import HomePage from './components/homepage';
import UserPool from './components/userPool';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNr, setPhoneNr] = useState('');

  // const onSubmit = (event:any) => {
  //   event.preventDefault();

  //   UserPool.signUp(email, password, [], null, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(data);
  //   });
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logged-in-page" element={<LoggedInPage />} />
        <Route path="/sign-up-as-client" element={<SignUpPageClient />} />
        <Route path="/sign-up-as-pilot" element={<SignUpPagePilot />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pilot" element={<Pilot />} />
      </Routes>
    </Router>
  );
};

export default App;
