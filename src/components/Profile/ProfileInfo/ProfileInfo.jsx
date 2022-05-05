import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else 
  return (
    <div>
      <div>
        <img
          src='https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300'
          alt=''
        />
      </div>
      <div className={style.descriptionBlock}>
        <div>
          <img src={props.profile.photos.large} />
        </div>
        <div className={style.user}>
          <p className={style.info}>
            <span>{`Name: ${props.profile.fullName}`}</span>
            <span>{`About me: ${props.profile.aboutMe}`}</span>
          </p>
          <p className={style.social}>
            <span> <i className='fa-brands fa-twitter'/> {props.profile.twitter}</span>
            <span><i className='fa-brands fa-facebook' /> {props.profile.facebook}</span>
            <span><i className='fa-brands fa-vk' /> {props.profile.vk}</span>
          </p>
        </div>
      </div>
      {console.log(props, 'from profileinfo')}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
