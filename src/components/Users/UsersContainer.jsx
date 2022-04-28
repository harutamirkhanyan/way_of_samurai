import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import { currentPage, follow, toogleIsFeatching, setTotalUsersCount, setUsers, unFollow } from '../redux/userReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFeatching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFeatching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFeatching(true)
        this.props.currentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFeatching(false)
                this.props.setUsers(response.data.items);
            });
    }

 render(){
     return <>
    {this.props.isFeatching ? <Preloader/> : null }
     <Users
        totalUsersCount={this.props.totalUsersCount}
        users={this.props.users}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        onPageChanged={this.onPageChanged}
     />
     </>
 }

  
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFeatching: state.usersPage.isFeatching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(currentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toogleIsFeatching: (featchStatus)=>{
//             dispatch(isFeatchingAC(featchStatus))
//         },
//     }
// }



export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    currentPage,
    setTotalUsersCount,
    toogleIsFeatching,
})(UsersContainer);