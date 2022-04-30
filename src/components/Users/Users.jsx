import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import * as axios from 'axios'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p
                  ? styles.selectPage
                  : styles.pageSelector
              }
              key={p}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                {" "}
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={styles.userimg}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'b965dcf5-4242-4105-9d78-4213229b0a9e'}
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unFollow(user.id);
                      }
                    });









                    // props.unFollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},
                        {
                          withCredentials: true,
                          headers: {
                           'API-KEY': 'b965dcf5-4242-4105-9d78-4213229b0a9e'}
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
