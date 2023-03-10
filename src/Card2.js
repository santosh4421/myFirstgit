export function Card2(props){
    const myObject2=props.name2
    return(
        <div >
        <img src=  {myObject2.image} alt ="Profile"
            style={{
                width: "100px",
                height:"100px",
                borderRadius:"50%"
                }}
         />  
          <h2>{ myObject2.designation} </h2>
          <b><h1 >{myObject2.name}</h1></b>
          <p>{myObject2.description}</p>
         </div>

    
    )
}