import * as axios from 'axios';
import {
  userAPI
} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOOGLE_IS_FEATCHING = 'TOOGLE_IS_FEATCHING';
const TOOGLE_IN_FOLLOWING_PROGRESS = 'TOOGLE_IN_FOLLOWING_PROGRESS';

let initalState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFeatching: false,
  followingInProgress: []
};

const usersReducer = (state = initalState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            }
          }
          return u
        })
      }

      case UNFOLLOW: {
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {
                ...u,
                followed: false
              }
            }
            return u
          })

        }
      }

      case SET_USERS: {
        return {
          ...state,
          users: action.users
        }
      }
      case SET_CURRENT_PAGE: {
        return {
          ...state,
          currentPage: action.currentPage
        }
      }
      case SET_TOTAL_USER_COUNT: {
        return {
          ...state,
          totalUsersCount: action.userCount
        }
      }
      case TOOGLE_IS_FEATCHING: {
        return {
          ...state,
          isFeatching: action.isFeatching
        }
      }
      case TOOGLE_IN_FOLLOWING_PROGRESS: {
        return {
          ...state,
          followingInProgress: action.isFeatching ?
            [...state.followingInProgress, action.userId] :
            state.followingInProgress.filter(id => id != action.userId)
        }
      }
      default:
        return state
  }
}


export const acceptFollow = (userId) => ({
  type: FOLLOW,
  userId
});
export const acceptUnFollow = (userId) => ({
  type: UNFOLLOW,
  userId
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users
});
export const currentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalUsersCount = (userCount) => ({
  type: SET_TOTAL_USER_COUNT,
  userCount
});

export const toogleIsFeatching = (isFeatching) => ({
  type: TOOGLE_IS_FEATCHING,
  isFeatching
});
export const toggleFollowingProgress = (isFeatching, userId) => ({
  type: TOOGLE_IN_FOLLOWING_PROGRESS,
  isFeatching,
  userId
});

export const getUsers= (currentPage, pageSize) => {
  return (dispatch) => {

    dispatch(toogleIsFeatching(true))
    userAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(toogleIsFeatching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
      });
  }
}

export const follow= (userId) => {
  return (dispatch) => {
   dispatch( toggleFollowingProgress(true, userId))
    userAPI.follow(userId)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch( acceptFollow(userId))
        }
       dispatch (toggleFollowingProgress(false, userId))
      });
  }
}

export const unfollow= (userId) => {
  return (dispatch) => {
   dispatch( toggleFollowingProgress(true, userId))
    userAPI.unfollow(userId)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch( acceptUnFollow(userId))
        }
       dispatch (toggleFollowingProgress(false, userId))
      });
  }
}

export default usersReducer