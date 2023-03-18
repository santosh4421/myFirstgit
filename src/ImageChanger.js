import React,{useState} from "react"
import "./ImageChanger.css"

export function ImageChanger(){
const arr=[
    "image1.jpg","image2.jpeg","image3.jpeg","image4.jpeg"
  ]
    const [imagesIndex,setImagesIndex]=useState(0)

  function handleClick(){
     setImagesIndex((imagesIndex+1)%arr.length)
  //   imagesIndex++
  }


  return (
    <div className="container">
       <div className="image">
         < img src={arr[imagesIndex]} height="700px" width={"700px"}/> 
       </div>
       <div className="button">
         <button onClick={handleClick}>click</button>   
       </div>
    </div>
  );
}