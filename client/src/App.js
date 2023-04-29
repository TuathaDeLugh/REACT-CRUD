// import logo from './logo.svg';
import './App.css';
import Adduser from './components/AddUser';
import Allusers from './components/Allusers';
import Edituser from './components/EditUser';
import MERN from './components/MERN';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MERN/>} />
        <Route path='/add' element={<Adduser/>} />
        <Route path='/all' element={<Allusers/>} />
        <Route path='/edit/:id' element={<Edituser/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
