import React from 'react'
import "../Styles/Donatur.css"
import Table from '../Components/Table'
const Donatur = () => {
  return (
      <>
      <div className='total'>
        <div className='donatur'>
           <p>Total Donatur</p>
        <img src="./Images/take-photo.png" alt="" />
      </div>
       
        <h1>1231</h1>
      </div>
      
      <div className='table'>
      <div className="table-header">
          <p>Donatur</p>

        <div className="search">
          <input type="text"  placeholder='Search'/>
          <img src="./Images/search.png" alt="" className='search-btn' />
        </div>
        <div className='filter'>
          <p>Filter</p>
          <img src="./Images/filter.png" alt="" />
        </div>
        <div className='table-btn'>
          <button>Download Table</button>
        </div>
      <br />
      <br />
 </div>

        {/* TABLES */}
        
        <Table/>

     </div> 
      
 </>
  )
}

export default Donatur