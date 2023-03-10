
import './App.css';
import { Card1 } from './Card1';
import { Card2 } from './Card2';

function App() {
 const User1 = {
    name : "Amit",
    image :" https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg ",
    designation : "Graphic Designer" ,
    description :" Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
  }
  
  const User2 = {
    name : "Ruhi" ,
    image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description :" perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups. " ,
    designation : "Singer"
  }
  
   return (
      <div className='App'>
       <section>
      {/* <Card1 name1={User1} /> */}
      <Card2 name2={User2}/>
      
       </section>
       </div>
  );
}

export default App;
