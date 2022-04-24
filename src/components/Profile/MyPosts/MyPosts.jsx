import React from "react";
import { addPostActoionCreator, updatePostActionCreator } from "../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";



const MyPosts = (props) => {
  console.log(props, 'myposts')
  let postsElements = props.profilePage.posts.map((p) => (
    <Post key={p.id} messages={p.message} count={p.like} />
  ));
  let newPostsElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  };

  let onPostChange=()=>{
    let val=newPostsElement.current.value
    props.uptadeNewPostText(val)
  }

  return (
    <div className={s.postsBlock}>
      My Posts
      <div>
        <div>
          <textarea
            ref={newPostsElement}
            placeholder={'Enter post'}
            value={props.profilePage.newPostsText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
