import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { valueAtom ,taskListAtom} from './atom';
import { useNavigate } from 'react-router-dom';



function Home() {
  const [value,setValue]=useRecoilState(valueAtom);

  const [taskdata,setTaskData]=useRecoilState(taskListAtom)

  const[changeColor,setChangeColor]=useState(false)

  const navigate=useNavigate()

  function handleChangeValue(e){
    setValue(e.target.value)
  }

function handleAddTask(){
  setTaskData([...taskdata,value])
  setValue("")
}

const handleTaskPage=()=>{
    navigate("/task")
}
function handleClick(){
  setChangeColor(!changeColor)
}

  return (
    <>
    <div className="App">
      <h1>Add task in todo list</h1>
      <input value={value} placeholder='enter' onChange={handleChangeValue}/>
      <br/>
      <button onClick={handleAddTask}>Add task</button>
      <button onClick={handleTaskPage}>Check Task</button>
    </div>
    <div>
        <h1 style={changeColor?{color:"blue"} : {color:'red'}}>Hi i am change the color</h1>
        <button onClick={handleClick}>change</button>
    </div>
    </>
  );
}

export default Home;
