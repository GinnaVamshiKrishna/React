import React from 'react';
import hello from './hello';


class Hello1 extends React.Component{


  render(){
    return(
       <>
        <div>Hello bro</div>
        <button onClick={(e)=>{ e.preventDefault();(this.props.nav("/Next"))}}>Go next</button>
       </>
    )
      }
  }

  export default hello(Hello1);
  
  







