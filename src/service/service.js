import axios from 'axios';

const url = "http://localhost:8080/1";
const url1 = "http://localhost:8080/5";
class service{

 info(){
    return axios.get(url);
 }
 info2(emp1){
   return axios.post(url1,emp1);
 }
}


export default new service();
