import React, { useEffect } from 'react';
import Profile from './Profile';
import style from './Profile.module.css';
import { connect } from 'react-redux';
import {setUserProfile, updateStatus,getStatus} from './../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const ProfileContainer=(props)=>{
  const id=useParams()
  useEffect(() => {
    
    profileAPI.getProfile(id.userId).then((data)=>{
      props.setUserProfile(data);
      props.getStatus(id.userId)
    })
  }, [id]);
    
  return (
        <div className={style.content}>
       <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
      );
}


let mapStateToProps=(state)=>({
    profile: state.profilePage.profile,
    status: state.profilePage.status
  });
export default compose(
  connect(mapStateToProps,{setUserProfile, getStatus, updateStatus}),
  withAuthRedirect
)(ProfileContainer)



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
