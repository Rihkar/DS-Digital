import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loggedInPage = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div>

      <div className="app">
        <div className="side-nav">
          <img className="logo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/f41b1794a0cee842c7b2" alt="" />
          <button className="get-quote">GET INSTANT QUOTE</button>
          <div className="nav-option">
            <img src="https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg" alt="" />
            Home

          </div>
          <div className="nav-option">
            <img src="https://cdn-icons-png.flaticon.com/512/974/974510.png" alt="" />
            Flights

          </div>
          <div className="nav-option">
            <img src="https://cdn-icons-png.flaticon.com/512/568/568717.png" alt="" />
            Process

          </div>
          <div className="nav-option">
            <img src="https://cdn-icons-png.flaticon.com/512/2989/2989976.png" alt="" />
            Deliverables

          </div>
          <div className="nav-option">
            <img src="https://cdn-icons-png.flaticon.com/512/3712/3712174.png" alt="" />
            Products

          </div>
        </div>
        <div className="right-side">
          <div className="account-wrapper">
            <div className="account" onClick={() => setLogoutVisible(!logoutVisible)}>
              Rihards Hanriot Karlauskis
              <img src="https://cdn-icons-png.flaticon.com/512/310/310818.png" alt="" />
            </div>

          </div>
          <div className={`${(logoutVisible ? 'logout' : 'hidden')}`} onClick={() => navigate('/')}>Log out</div>
          <div className="footer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733641.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" alt="" />
          </div>
        </div>

      </div>

    </div>
  );
};
export default loggedInPage;
