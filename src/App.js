import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Home from './Component/home';
import Task from "./Component/task";
function App() {
  

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task' element={<Task/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
