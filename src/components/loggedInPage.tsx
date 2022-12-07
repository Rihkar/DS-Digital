/* eslint-disable max-len */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const aws = require('aws-sdk');

const loggedInPage = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [img, setImg] = useState('');
  const [s3content, setS3conent] = useState([]);
  const navigate = useNavigate();
  async function yo() {
    try {
      aws.config.update({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_SECRET_KEY,

      });
      const s3 = new aws.S3();
      const response = await s3.listObjectsV2({
        Bucket: 's3-bucket-drones-solutions-us-east-1',
        Prefix: 'DS Digital/',
      }).promise();
      console.log('my image', response.Contents[2]);
      console.log('response', response.Contents.map(({ Key }:any) => Key).filter((file:string) => file.endsWith('/')));
      setImg(response.Contents[2]);
      setS3conent(response.Contents.map(({ Key }:any) => Key).filter((file:string) => file));
    } catch (error) {
      console.log('error', error);
    }
  }

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

          <button onClick={() => yo()}>test</button>
          <img src={img} alt="imagem-test" />
          <div>
            {s3content.map((fileName) => (
              <div key={Math.random()}>{fileName}</div>
            ))}
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
