const SET_USER_DATA = 'SET_USER_DATA';


let initalState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false

};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
      default:
        return state
  }
}


export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: {id, email, login}
});
export default authReducer