import React from "react";
import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div>
      <div className={style.friend}></div>
      {props.name}
    </div>
  );
};

export default Friend;
