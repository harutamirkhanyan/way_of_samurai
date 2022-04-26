import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
 console.log(props.users.length, 'users')
  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ktpKDdwF6ctyhigi0Gu9nGBZG1aLyUoxQw&usqp=CAU",
      followed: true, fullName: "Dima",   status: "Online",     
      // location: { city: "Barcelona", country: "Spine" },
    },
    {id: 2, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ktpKDdwF6ctyhigi0Gu9nGBZG1aLyUoxQw&usqp=CAU",
    followed: false, fullName: "Alen",   status: "Offline",     
    // location: { city: "Armenia", country: "Yerevan" },
  },
  {id: 3, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ktpKDdwF6ctyhigi0Gu9nGBZG1aLyUoxQw&usqp=CAU",
  followed: true, fullName: "Alen",   status: "Offline",     
  // location: { city: "Armenia", country: "Yerevan" },
},
    ]);

  }

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.imgUrl} alt="Img" className={style.userimg} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Followed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Unfollowed
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location}</div>
                <div>{u.location}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
