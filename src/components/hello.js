import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
const hello =Wrcomp=>props=>{
    const nav = useNavigate()
    const ue = useEffect()
    return (<Wrcomp {...props} nav={nav} ue={ue} />);
  }
  export default hello;
 
 