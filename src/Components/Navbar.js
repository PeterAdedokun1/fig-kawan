import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/Navbar.css"
const Navbar = () => {
    const [showMenu , setShowMenu] = useState(false)
  return (
      <div className='NavBar'>
          <nav className="nav">
              <div className="nav-container">
                  <div className='logo'>
                      <img src="./Images/logo.png" alt="" />
                  </div>          
              <ul className='nav-items'>
                  <li className='nav-item'>
                      <NavLink to="/"  className="link">
                          <img src="./Images/Home.png" alt="" />
                            <p>Dashboard</p>
                      </NavLink>
                  </li>
                  <li className='nav-item'>
                          <NavLink to="/Galang" className="link" activeclassname="active" onClick={() => setShowMenu(!showMenu)}>
                          <img src="./Images/Galang.png" alt="" />
                              <p>Galang Dana</p>
                              <div className='arrow' >
                                  <img src="./Images/arrowup.png" alt="" /> 
                              </div>
                          </NavLink>
                          {showMenu  &&
                              <div className='sub-menu'>
                                  <p>Compaign</p>
                                  <p>LamanBantu</p>
                              </div>
                          }
                          
                  </li>
                 <li className='nav-item'>
                      <NavLink to="/Donatur" className="link" >
                          <img src="./Images\Donatur.png" alt="" />
                            <p>Donatur</p>
                      </NavLink>
                  </li>
                  <li className='nav-item'>
                      <NavLink to="/Saldo"  className="link">
                          <img src="./Images/Saldo.png" alt="" />
                            <p>Saldo Danosi</p>
                      </NavLink>
                  </li>
                 <li className='nav-item'>
                      <NavLink to="/Akun"  className="link">
                          <img src="./Images/user.png" alt="" />
                            <p>Akun</p>
                      </NavLink>
                  </li>
                  </ul>
          </div>
                  
            <div className="footer">
              <img src="./Images/cancel.png" alt="" />
              <p>Keluar</p>
          </div>
          </nav>
          
    </div>
  )
}

export default Navbar