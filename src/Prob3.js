import {useState} from "react"

export function Prob3(){
    const [greet,setGreet]=useState("Amit")
    let value;
    
    function handclick(previousName){
        setGreet(previousName=> previousName==="Amit" ? "Rajan" : "Amit")
     }
    return (
        <div>
        <h2>My name is {greet}</h2>
        <button onClick={ handclick}>changeName</button>
        

        </div>
    )

}