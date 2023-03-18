import React from "react";
import { useEffect,useState } from "react";



export default function LoginForm(){


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isChecked,setIsChecked]=useState()
  
     function input1(e){
       setEmail(e.target.value)
     }
     function input2(e){
       setPassword(e.target.value)
     }
     function check1(){
       setIsChecked(!isChecked)
     }
     const handleSubmit=(e)=>{
        e.preventDefault()
     }
  
  
  
    return (
      <div >
         <>
                  <div className="mainDiv">
                      <div className="centerDiv">
                      <div className="header">
                        <h1 >Welcome!</h1>
                       </div>
                       <div className="header">
                        <p >login in your account</p>
                        </div> 
                          <form onSubmit={handleSubmit}>
                          <div className="input" id="input1Id">
                              <input onChange={input1} type="email" value={email}placeholder="Add Your Email"/>
                         </div>   
                              <br/>
                          <div className="input" id="input2Id">    
                              <input onChange={input2} type="password" value={password} placeholder="Add Your Password"/>
                         </div>    
                              <br/>
                              <input onChange={check1} type="checkbox" value={isChecked} id="checkId"/>
                              <br/>

                              <button type="submit" id="button1" style={{background:"blue"}}>login</button>
                             
                          </form>
                      </div>
                  </div>
              </>
      </div>  
      
    );
  }
                  