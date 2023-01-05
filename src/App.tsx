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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DSPage />} />
      <Route path="/logged-in-page" element={<LoggedInPage />} />
      <Route path="/sign-up-as-client" element={<SignUpPageClient />} />
      <Route path="/sign-up-as-pilot" element={<SignUpPagePilot />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default App;
