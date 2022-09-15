import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import Donatur from './Pages/Donatur';
import Saldo from './Pages/Saldo';
function App() {

  const [navToggle, setNavToggle] = useState(false);

    
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : " "}`} >
        <Navbar />
      </div>
      <div className="nav-btn" onClick={() => setNavToggle(!navToggle)}>
        <img src="./Images/menu 1.png" alt="" />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Donatur" element={<Donatur />} />
          <Route path='Saldo' element={<Saldo/>}/>
          
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
