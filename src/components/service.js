import axios from 'axios';

const link1 = "http://localhost:8080/2";
const link2 = "http://localhost:8080/6";

class service{

 register(emp){
    return axios.post(link1,emp);
 }
 verify(emp){
    return axios.post(link2,emp);
 }
 
}


export default new service();
