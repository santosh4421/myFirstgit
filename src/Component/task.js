import React from 'react'
import { taskListAtom } from './atom'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'

function Task() {

    const navigate=useNavigate()
    const data=useRecoilValue(taskListAtom)

    const handleNavigation=()=>(
        navigate("/")
    )
   

  return (
    <div>
        <h1>Task todo..</h1>

        <ul>
            {data.map((ele,index)=>{
               return (
               <li key={index}>{ele}</li>
            )
            })}
        </ul>
        <button onClick={handleNavigation}>Go to home page</button>
    </div>
  )
}

export default Task;