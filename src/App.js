//import logo from './logo.svg';
//import './App.css';
import { useEffect,useState } from 'react';
import Todo from './Todo';

function App() {

  const [todoData,setTodoData] = useState([])
  // setting data in useState as we wnat ui to be updated with change in list of todoData
  
  const [task , setTask] = useState('')
  
  function handleChange (e) {
      // newly added input we receiving here ...
    const newTask = e.target.value  
    // here we storing newly added task
    setTask(newTask)
  }
  
  function handleSubmit () {
    // adding new task in our list here ...
    const exitingTodos = [...todoData,task]
    setTodoData(exitingTodos)
  }
  
  function removeTask (taskToDelete) {
    // taskToDelete  -/> this is the task we have received to delete
    // apply the logic and delte this task from list and update the list 
  
  setTodoData(todoData.filter((item,i) => i !== taskToDelete))
  }
  
  
  
    return (
         <div className='App'>
        
  
        {
          todoData.map((ele,index) => (
            // passing custom text and delte function in components
            //  for every element in array component will get created seprately 
            <Todo 
              task = {ele}
              key={index}
              onDelete={() => removeTask(index)}
            />
          ))
        }
        <div className='App'>
          <input className='san' onChange={handleChange}/> 
          <button className='san' onClick={handleSubmit}>Submit</button>
        </div>
  
  
      </div>
    );
  }
 export default App;
// function TodoItem({ text, onDelete }) {
//   return (
//     <li>
//       {text}
//       <button onClick={onDelete}>Delete</button>
//     </li>
//   );
// }
