import './Styles/reset.scss';
import './App.scss';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useState } from 'react';
import Client from './components/client/client';
import Admin from './components/admin/admin';
import Pilot from './components/pilot/pilot';
import SignUpPageClient from './components/signUpPageClient/signUpPageClient';
import SignUpPagePilot from './components/signUpPagePilot/signUpPagePilot';
import LoggedInPage from './components/loggedInPage/loggedInPage';
import DSPage from './components/DSPage/DSPage';
import UserPool from './components/userPool';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DSPage />} />
      <Route path="/logged-in-page" element={<LoggedInPage />} />
      <Route path="/sign-up-as-client" element={<SignUpPageClient />} />
      <Route path="/sign-up-as-pilot" element={<SignUpPagePilot />} />
      <Route path="/client" element={<Client />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/pilot" element={<Pilot />} />
    </Routes>
  </Router>
);

export default App;
