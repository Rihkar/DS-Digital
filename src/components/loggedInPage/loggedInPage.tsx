/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loggedInPageCSS from './loggedInPage.module.scss';

const AWS = require('aws-sdk');

const loggedInPage = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [seeImg, setSeeImg] = useState(false);
  const [seeVideo, setSeeVideo] = useState(false);
  const [imgName, setImgName] = useState('');
  const [s3images, setS3images] = useState([]);
  const [s3videos, setS3videos] = useState([]);
  const [imgUrl, setImgUrl] = useState('a');
  const [companyName, setCompanyName] = useState('DS Digital/');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        AWS.config.update({
          accessKeyId: process.env.REACT_APP_ACCESS_KEY,
          secretAccessKey: process.env.REACT_APP_SECRET_KEY,

        });
        AWS.config.region = 'us-east-1';
        const s3 = new AWS.S3({ params: { Bucket: 's3-bucket-drones-solutions-us-east-1' } });
        const url = s3.getSignedUrl('getObject', {
          Bucket: 's3-bucket-drones-solutions-us-east-1',
          Key: imgUrl,
        });

        const response = await s3.listObjectsV2({
          Prefix: companyName,
        }).promise();
        console.log('url', url);
        console.log('my image', response.Contents[2]);
        console.log('response', response.Contents.map(({ Key }:any) => Key).filter((file:string) => file.endsWith('jpeg')));
        setImgName(url);
        setS3images(response.Contents.map(({ Key }:any) => Key).filter((file:string) => file.endsWith('jpeg')));
        setS3videos(response.Contents.map(({ Key }:any) => Key).filter((file:string) => file.endsWith('mp4')));
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, [imgUrl]);

  return (
    <div>

      <div className={loggedInPageCSS.app}>
        <div className={loggedInPageCSS.side_nav}>
          <img className={loggedInPageCSS.logo} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/f41b1794a0cee842c7b2" alt="" />
          <button className={loggedInPageCSS.get_quote}>GET INSTANT QUOTE</button>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg" alt="" />
            Home

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/974/974510.png" alt="" />
            Flights

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/568/568717.png" alt="" />
            Process

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/2989/2989976.png" alt="" />
            Deliverables

          </div>
          <div className={loggedInPageCSS.nav_option}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/3712/3712174.png" alt="" />
            Products

          </div>
        </div>
        <div className={loggedInPageCSS.right_side}>
          <div className={loggedInPageCSS.account_wrapper}>
            <div className={loggedInPageCSS.account} onClick={() => setLogoutVisible(!logoutVisible)}>
              Rihards Hanriot Karlauskis
              <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/310/310818.png" alt="" />
            </div>

          </div>
          <div className={`${(logoutVisible ? loggedInPageCSS.logout : loggedInPageCSS.hidden)}`} onClick={() => navigate('/')}>Log out</div>
          {seeImg ? <img className={loggedInPageCSS.img} src={imgName} alt="testPhoto" />

            : seeVideo && (
            <video
              src={imgName}
              controls
            />
            )}
          <div>
            {s3images.map((fileName) => (
              <button onClick={() => { setImgUrl(fileName); setSeeImg(true); setSeeVideo(false); }} key={Math.random()}>{fileName}</button>
            ))}
          </div>
          <div>
            {s3videos.map((fileName) => (
              <button onClick={() => { setImgUrl(fileName); setSeeVideo(true); setSeeImg(false); }} key={Math.random()}>{fileName}</button>
            ))}
          </div>

          <div className={loggedInPageCSS.footer}>
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/733/733641.png" alt="" />
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="" />
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt="" />
            <img className={loggedInPageCSS.footer_logo} src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" alt="" />
          </div>
        </div>

      </div>

    </div>
  );
};
export default loggedInPage;
