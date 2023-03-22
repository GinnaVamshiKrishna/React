import{Routes,Route} from 'react-router-dom';
import Hello1 from './components/Hello1';
import{Next} from './components/Next';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Hello1 />} />
      <Route path='/Next' element={<Next />} />
      
    </Routes>
   
  );
}

export default App;
