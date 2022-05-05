import { profileAPI } from "../api/api";

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POSTS = 'ADD-POSTS';
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initalState = {
  posts: [{
      id: 1,
      message: 'My first post',
      like: 5
    },
    {
      id: 2,
      message: 'Hello, how are you?',
      like: 13
    },
  ],
  newPostsText: '',
  profile: null,
  status: ''

}

const profileReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostsText: action.newText
      }
      case ADD_POSTS:
        let newPost = {
          id: 6,
          message: state.newPostsText,
          like: 0
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostsText: ('')
        };
        case SET_USER_PROFILE:
          return{
            ...state, 
            profile: action.profile
          };
          case SET_STATUS:
          return{
            ...state, 
            status: action.status
          };
        default:
          return state;
  }
}

export const updatePostActionCreator = (val) => ({
  type: UPDATE_POST_TEXT,
  newText: val
});
export const addPostActoionCreator = () => ({
  type: ADD_POSTS
});
export const setUserProfile=(profile)=>({
  type: SET_USER_PROFILE,
  profile
});
export const setStatus=(status)=>({
  type: SET_STATUS,
  status
})
export const updateStatus=(status)=>(dispatch)=>{
  profileAPI.updateStatus(status)
  .then(response=>{
    if(response.data.resulteCode===0){
      dispatch(getStatus(response.data));
    }
  });
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(response => {
          dispatch(setStatus(response.data));
      });
}


export default profileReducer