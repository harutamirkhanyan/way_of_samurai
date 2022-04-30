import React, { useEffect } from 'react';
import Profile from './Profile';
import style from './Profile.module.css';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';

const ProfileContainer=(props)=>{
  const id=useParams()
  useEffect(() => {
    
    profileAPI.getProfile(id.userId).then((data)=>{
      props.setUserProfile(data);
    })
  }, [id]);


  return (
        <div className={style.content}>
       <Profile {...props} profile={props.profile}/>
        </div>
      );


}

let mapStateToProps=(state)=>({profile: state.profilePage.profile});

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);


// class ProfileContainer extends  React.Component {

// componentDidMount(){
//   v(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             });
// }


//   render(){
//     console.log(this.props)
//   return (
//     <div className={s.content}>
//    <Profile {...this.props} profile={this.props.profile}/>
//     </div>
//   );
// };
// }

// let mapStateToProps=(state)=>({profile: state.profilePage.profile});
// export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);
