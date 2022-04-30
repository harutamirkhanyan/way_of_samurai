import React from "react";
import { connect } from "react-redux";
import {
  addPostActoionCreator,
  updatePostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


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
