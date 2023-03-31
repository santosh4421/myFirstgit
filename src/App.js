import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function App() {
  const data=useNavigate()

function handleClick(){
  data("/Login")
}



  return (
    <>
      <div>
        <nav className="header">
          <h3 id="tag">UI/UX DESIGN</h3>
          <div className="header2">
            {/* <p id="home">Home</p>
            <p id="about">About us</p>
            <p id="login">Login</p> */}
            <ul>
              <li>home</li>
              <li>
                <a href="#">about</a>
              </li>
              <li onClick={handleClick} style={{cursor:"pointer"}} >login</li>
              <li>
                <FaUser className="fauser" />
              </li>
            </ul>
          </div>
        </nav>
        <div className="div1">
          <h2>About Us</h2>
          <div className="content">
            <img id="img" src="mediaQueriesAss.jpg" />
            <div>
              <h5 id="name">Mat Simon</h5>
              <p>
                
                Mat Simon is a content marketing specialist at SimpleTexting.
                She specializes in making helpful, entertaining video content
                and writing blogs that help businesses take advantage of all
                that texting has to offer.
              </p>
             
            </div>
            
          </div>
          <div className="box">
              <div className="box1">
                  <h6>write your skills</h6>
                   <p> My skills are creativity and patience .</p>
               </div>
                <div className="box2">
                   <h6 >what are your hobbies?</h6>
                    <p>my hobbies are playing criket and listening music</p>
                </div>
                <div className="box3">
                   <h6>what are you learning ,write about reactjs?</h6>
                    <p>we are the topics like props,react component,state and hooks</p>
                </div>
              </div>

          <div className="information"></div>
        </div>
      </div>
    </>
  );
}

export default App;
