import React from 'react';
import hello from './hello';
import service from '../service/service';



class Hello1 extends React.Component{
  constructor(){
    super();
    this.state = {
      username:"",
      password:"",
      inputvalue:0,
      collect:null,
      sta:false,
      sta1:false
      
    }
    this.collect=this.collect.bind(this);
    this.send=this.send.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  collect(e){
    e.preventDefault();
    service.info().then((res)=>{
    const value2 = res.data;
    console.log(value2[0]);
    this.setState({
      username:value2[0].username,
      password:value2[0].password,
    }) 
   this.props.nav("/Next", {state:value2[0]});
  })
  }

  send(){
    const emp1={id:this.state.inputvalue}
    console.log(emp1.id)
    service.info2(emp1).then((res)=>{
      const value1= res.data;
      this.setState({
        username:value1.username,
        password:value1.password,
        sta1:true
      })
     

      console.log(value1);
      //console.log(Next.myusername)
      //this.props.nav("/Next");
    })
  }
 handleChange(e){
  console.log(e.target.value)
  e.preventDefault();
  this.setState({inputvalue:e.target.value})
 }

 
  render(){
    return(
       <div>
        <div>Hello bro</div>
        <button onClick={this.collect}>Go next</button>
       <input type="number" value={this.state.inputvalue} onChange={this.handleChange}></input>
        <button onClick={(e)=>{ e.preventDefault();this.send()}}>submit</button>
        {this.state.sta1 && <p>username:{this.state.username} password:{this.state.password}</p>}
        </div>)
       
      }
  
    }
  export default hello(Hello1);
  
  







