import React from 'react'
import {useNavigate} from 'react-router-dom'
import style from "./Login.module.css"
import { useState } from 'react'

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")



  function handleSubmit(e){
    e.preventValue() 
  }

  


    const data=useNavigate()

    function handleClick1(){
       data("/Register")
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
         <div className={style.button}>
            <p onClick={handleClick1} id={style.register}>click here to <br/> Register</p>
             <button type='sumit' id={style.button}>Login</button>
         </div>
      </form>
    </div>
    </div>
    </>





  )
}

export default Login