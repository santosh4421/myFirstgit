import "./Media.css";
import React, { useState } from "react"
import {TfiAlignJustify} from "react-icons/tfi"
import {CgClose} from "react-icons/cg"

export function Media() {
  const [isHeadingVisible,setIsHeadingVisible]=useState(false)
  const Items = ["Home","contact","services","about us"];


function showHeading(){
  setIsHeadingVisible(true)
}
function hideData(){
  setIsHeadingVisible(false)
}




  return (
    <>
       <nav>
{/* 
       { isHeadingVisible ? <CgClose onClick={hideData}/> :<TfiAlignJustify onClick={showHeading}/>}

       {
           isHeadingVisible &&
           <div className="map">
                 {Items.map((ele)=>{
                  <p >{ele}</p>
                 })
                 
                 }
           </div>
       } */}

       <div className="Header1">
            <h3>
               {" "}
              <b>Onclick</b>
            </h3>
          </div>

        <div className="header">
        <div className="Header2">
            <p>Home </p>
            <p>Services </p>
            <p>Contact </p>
            <p>About us </p>
          </div> 
          <div className="Header3">
              <p>login</p>
              <p>Sign Up</p>
            </div> 

          
           
            
          
          <div>
            {/* <button onCLcik={handleClick}></button>
            {setData?"show":""} */}
          </div>
          <div className="hamburger-menu">
          <a href="#"></a>
          <TfiAlignJustify style={{justifyContent :"end"}}/>

          </div>
        </div>
        </nav>

      <div className="mainDiv">
        <div className="div1">
          <p>Totaly free</p>
          <br/>
          <b>
            <h2>let bring our team together in onclick</h2>
          </b>
        </div>
        <div className="div2">
          <img src="mediaqueriesAss.jpg" />
        </div>
      </div>
    </>
  );
}
