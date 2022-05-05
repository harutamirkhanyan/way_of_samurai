import React from 'react';
import {connect} from 'react-redux';
import { currentPage, follow, unfollow, toggleFollowingProgress, getUsers } from '../../redux/userReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        currentPage,    
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer)


// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     currentPage,    
//     toggleFollowingProgress,
//     getUsers
// })(UsersContainer);