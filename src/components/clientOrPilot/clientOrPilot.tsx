import { useNavigate } from 'react-router-dom';
import ClientOrPilotCSS from './clientOrPilot.module.scss';

const ClientOrPilot = () => {
  const navigate = useNavigate();
  return (
    <div className={ClientOrPilotCSS.container}>
      <div className={ClientOrPilotCSS.test}>
        <h1 className={ClientOrPilotCSS.sign_up_title}>Sign Up</h1>
        <div className={ClientOrPilotCSS.client_or_pilot_wrapper}>
          <div className={ClientOrPilotCSS.as_a_client} onClick={() => navigate('/sign-up-as-client')}>As a Client</div>
          <div className={ClientOrPilotCSS.as_a_pilot} onClick={() => navigate('/sign-up-as-pilot')}>As a Pilot</div>
        </div>
      </div>

    </div>

  );
};

export default ClientOrPilot;
