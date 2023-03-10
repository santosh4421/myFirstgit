export function Card1(props){
    const myObject1=props.name1
    return(
        <div >
        <img src=  {myObject1.image} alt ="Profile"
            style={{
                width: "100px",
                height:"100px",
                borderRadius:"50%"
                }}
         />  
          <h2>{ myObject1.designation} </h2>
          <b><h1>{myObject1.name}</h1></b>
          <p>{myObject1.description}</p>
         </div>

    
    )
}