import './Styles/reset.scss';
import './App.scss';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Admin from './components/admin/admin';
import SignUpPageClient from './components/signUpPageClient/signUpPageClient';
import SignUpPagePilot from './components/signUpPagePilot/signUpPagePilot';
import LoggedInPage from './components/loggedInPage/loggedInPage';
import DSPage from './components/DSPage/DSPage';
import ClientOrPilot from './components/clientOrPilot/clientOrPilot';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DSPage />} />
      <Route path="/logged-in-page" element={<LoggedInPage />} />
      <Route path="/sign-up-as-client" element={<SignUpPageClient />} />
      <Route path="/sign-up-as-pilot" element={<SignUpPagePilot />} />
      <Route path="/client-or-pilot" element={<ClientOrPilot />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default App;
