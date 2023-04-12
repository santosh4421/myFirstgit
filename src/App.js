import logo from './logo.svg';
import './App.css';
import {useState} from "react"


export default function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [values,setValues]=useState([])
  
  console.log(email)
  console.log(name)

  function handleClick(){
    setValues([...setValues,name,email,number])
    // setValues([...setName,name])
  }
console.log(setValues)
  return (
    <div className="App">
      <div className="main">
        <div className="main1">
          
          <div className='main11'>
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
      
       
        
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
    
      
        
      <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} /><br/>
     
        <button type="submit" onClick={handleClick}>Submit</button>
        </div>
      
          
          <div className='main12'>
          {name}<br/>
             {email}<br/>
             {number}
          </div>
          </div>
        
        
        <div className="main2">
        <ul>
            {values.map((ele)=>{
              return(<li>{ele}</li>)
            })}
            </ul>
        </div>
        </div>
  </div>
      
      
    
  );
}