import React from "react";
import { connect } from "react-redux";
import StoreContext from "../../../StoreContext111";
import {
  addPostActoionCreator,
  updatePostActionCreator,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   // console.log(props.store.getState().profilePage)
//   // let state = props.store.getState().profilePage;

//   // let addPost = () => {
//   //   props.store.dispatch(addPostActoionCreator());
//   // };

//   // let onPostChange = (val) => {
//   //   let action = updatePostActionCreator(val);
//   //   props.store.dispatch(action);
//   // };

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().profilePage;
//         // let addPost = () => {
//         //   store.dispatch(addPostActoionCreator());
//         // };

//         let onPostChange = (val) => {
//           let action = updatePostActionCreator(val);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             uptadeNewPostText={onPostChange}
//             addPost={addPost}
//             profilePage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps=(dispatch)=>{
  return {
    addPost: ()=>{
      dispatch(addPostActoionCreator());
    },
    uptadeNewPostText: (val)=>{
      let action = updatePostActionCreator(val);
      dispatch(action);
    }
  }

}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
