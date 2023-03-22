
import { useNavigate } from "react-router-dom"
const hello =Wrcomp=>props=>{
    const nav = useNavigate()
   
    return (<Wrcomp {...props} nav={nav}/>);
  }
  export default hello;
 
