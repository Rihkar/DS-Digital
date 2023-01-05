import { useNavigate } from 'react-router-dom';
import homePageCSS from './DSPage.module.scss';

const DSPage = () => {
  const navigate = useNavigate();
  return (
    <div className={homePageCSS.container}>
      <div className={homePageCSS.first_header}>
        <div className={homePageCSS.first_header_logo_box}>
          <img className={homePageCSS.logo} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/f41b1794a0cee842c7b2" alt="" />

        </div>
        <div className={homePageCSS.text}>contato@dronessolution.com.br</div>
        <div>
          <button onClick={() => navigate('/client-or-pilot')}>Sign Up</button>
          <button onClick={() => navigate('/client-or-pilot')}>Log In</button>
        </div>

      </div>
    </div>

  );
};

export default DSPage;
