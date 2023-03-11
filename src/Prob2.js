import {useState} from "react"

export function Prob2(){
    const [greet,setGreet]=useState(0)
    let value;
    function handclickIncrease(){
       setGreet(greet+1)
    }
    function handclickDecrease(){
        setGreet(greet-1)
     }
    return (
        <div>
        <h2>{greet}</h2>
        <button onClick={ handclickIncrease}>Increase</button>
        <button onClick={handclickDecrease}>Decrease</button>

        </div>
    )

}