import logo from './logo.svg';
import './App.css';
import { Media } from './Media';
import Calendar from './Calender/Calender';
import PixelToRemConverter from './PixelToREm/PixelToREm';

function App() {
  return (
   <>
    {/* <Media/> */}
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    {/* <form>
      <input list="option"/>
        <datalist id="option">
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
        </datalist>
    </form> */}
    {/* <Calendar/> */}
    <PixelToRemConverter/>
    </div>
    </>
  );
}

export default App;
