// import React from "react";
// import StoreContext from "../../StoreContext";
// import Friend from "./Friend/Friend";
// import style from "./Friends.module.css";

// const Friends = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().navbar.friends;
//         const friendInfo = state.map((frend) => (
//           <Friend key={frend.id} name={frend.name} />
//         ));
//         return <div className={style.friends}>{friendInfo}</div>;
//       }}
//     </StoreContext.Consumer>
//   );
// };

// export default Friends;
