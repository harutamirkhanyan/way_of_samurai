import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        {/* <Navbar state={props.state.navbar} /> */}
        <Navbar/>
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route
              path="/profile"
              element={<Profile store={props.store} profilePage={props.state.profilePage} 
              dispatch={props.dispatch}/>}
            /> */}
             <Route
              path="/profile"
              element={<Profile/>}
            />
            {/* <Route
              path="/dialogs"
              element={<DialogsContainer store={props.store} messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}
            /> */}
               <Route
              path="/dialogs"
              element={<DialogsContainer/>}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/friends" element={<Friends />} /> */}
          </Routes>
        </div>
      </div>
  );
};

export default App;
