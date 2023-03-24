import React, { Component } from 'react';
import service from '../components/service';



export default class Login extends Component {
    constructor(){
        super(); 
        this.state = {
            inputvalue:"",
            pvalue:"",
            username:"",
            password:"",
            sta:false,
            sta1:false,
            sta2:false,
            sta3:false,
            sta4:false
        }
        this.send=this.send.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleIt=this.handleIt.bind(this); 
        this.getit=this.getit.bind(this);
        
    }

    send(){
      const emp={"username":this.state.inputvalue,"password":this.state.pvalue}
      console.log(emp)
      if(!this.state.sta4){
      service.register(emp).then((res)=>{
        const value= res.data;
        this.setState({
          username:value.username,
          password:value.password,
          sta:true
          })})
      }
      else{}
    }


    getit(){
      const emp={"username":this.state.inputvalue}
      console.log(emp)
      service.verify(emp).then((res)=>{
        const value1=res.data;
        console.log(value1)
        if (value1.length === 0 ) {
          this.setState({sta1:true, sta2:false, sta3:false})
         }
        for(let i = 0; i<value1.length; i++){
        if(value1[i].username === this.state.inputvalue && value1[i].password === this.state.pvalue){
          this.setState({sta2:true, sta1:false, sta3:false})
          break
       }
       else if(value1[i].password !== this.state.pvalue){
        this.setState({sta3:true, sta1:false, sta2:false})
       }
    }})
     

    }
   
    handleChange(e){
      console.log(e.target.value)
      e.preventDefault();
      const emp={"username":e.target.value}
      this.setState({inputvalue:e.target.value})
      console.log(emp)
      service.verify(emp).then((res)=>{
        const value2=res.data;
        console.log(value2)
        if(value2.length === 0){
          this.setState({sta4:false})
        }
        else{
          this.setState({sta4:true})
        }
        
      })
      
    }
   
    handleIt(e){
      console.log(e.target.value)
      e.preventDefault();
      this.setState({pvalue:e.target.value})
    }
  
  render() {
    return (
      <div back>
        <form>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <h1>LOGIN PAGE</h1>
          <div style= {{border:"12px solid blue", padding:'50px', backgroundColor:'lightgray'}}>
          <div style={{marginBottom: '20px'}}>
          <label >Username:</label>
          <input type="text" value={this.state.inputvalue} onChange={this.handleChange} style={{ margin: '6px', width: '300px'}}></input>
          {this.state.sta4 && <p>username already exists</p>}
          </div>
          <div>
           <label>Password:</label>
         <input type="text" value={this.state.pvalue} onChange={this.handleIt} style={{ margin: '9px', width: '300px'}}></input>
         </div>
         
          <div>
            <button style={{margin:"10px", width:'100px', marginLeft:"100px"}} onClick={(e)=>{ e.preventDefault();this.getit()}} >verify</button>
            {this.state.sta2 && <p>this account is verified</p>}
            {this.state.sta1 && <p>Try registering first.</p>}
            {this.state.sta3 && <p>Provided details are wrong!</p>}
            <button style={{width:'100px'}} onClick={(e)=>{ e.preventDefault();this.send()}} >register</button>
            {this.state.sta && <p>username:{this.state.username} and password:***** are saved</p>}


          </div>
          </div>
        </div>
        </form>
       


      </div>
    )
  }
}
