const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POSTS = 'ADD-POSTS';
const SET_USER_PROFILE='SET_USER_PROFILE'

let initalState = {
  posts: [{
      id: 1,
      message: "My first post",
      like: 5
    },
    {
      id: 2,
      message: "Hello, how are you?",
      like: 13
    },
  ],
  newPostsText: '',
  profile: null

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
          }
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
})

export default profileReducer