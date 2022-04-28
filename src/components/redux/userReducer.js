const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOOGLE_IS_FEATCHING='TOOGLE_IS_FEATCHING';

let initalState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFeatching: false
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
      case SET_TOTAL_USER_COUNT:{
        return {
          ...state,
          totalUsersCount: action.userCount
        }
      }
      case TOOGLE_IS_FEATCHING:{
        return {
          ...state,
          isFeatching: action.isFeatching
        }
      }
      default:
        return state
  }
}


export const follow = (userId) => ({
  type: FOLLOW,
  userId
});
export const unFollow = (userId) => ({
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

export const toogleIsFeatching=(isFeatching)=>({
  type: TOOGLE_IS_FEATCHING,
  isFeatching
})

export default usersReducer