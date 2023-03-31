import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import style from "./Register.module.css"

function Register() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [rePassword,setRePassword]=useState("")

  
  function handleSubmit(e){
    e.preventValue()
  }

  





  return (
    <>
    <div className={style.outerDiv}>
       
     
      <img src='mediaQueriesAss.jpg' className={style.img}/>
      <div className={style.mainDiv}>
      
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event)=>setEmail(event.target.value)} />
  
           <br/>
  
           <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
           <br/>
           <input type="password" onChange={(event)=>setRePassword(event.target.value)}/>
           <div>
           
           <button type='button' id={style.button}>Register</button>
           </div>
        </form>
      </div>
      </div>
      
      </>
      
      
      
 
  )   
  
}

export default Register