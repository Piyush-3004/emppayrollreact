import logo from './logo.svg';
import './App.css';
import Home from './Content/Home';
import { Routes,Route } from 'react-router-dom';
import Form from './Content/Form';
import EditUser from './Content/EditUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/form' element={<Form />} />
      <Route path='/edituser/:empId' element={<EditUser />} />
    </Routes>
    );
}

export default App;
