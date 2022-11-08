import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="first-header">
        <div className="first-header-logo-box">
          <img className="logo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/f41b1794a0cee842c7b2" alt="" />

        </div>
        <div className="text">contato@dronessolution.com.br</div>
        <div>
          <button onClick={() => navigate('/sign-up-as-client')}>Sign up as client</button>
          <button onClick={() => navigate('/sign-up-as-pilot')}>Sign up as pilot</button>
        </div>

      </div>
    </div>

  );
};

export default HomePage;
