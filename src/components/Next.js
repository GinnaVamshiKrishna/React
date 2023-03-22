import React from "react";
import { useLocation } from "react-router-dom";

export const Next = (props)=> {
    const location = useLocation();
  const state = location.state;
 
    return (
    <div>
        Rock the world
       <p><button onClick={(e)=>{ e.preventDefault();console.log(state.username)}}>submit</button></p> 
       <p>hiiiiiiii there!!!!!!!.............{state.username}</p>
        
     </div>   

    )
}