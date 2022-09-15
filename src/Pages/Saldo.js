import React from 'react'
import "../Styles/Donatur.css"
import Table2 from '../Components/Table2'
const Saldo = () => {
  return (
      <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className='total' style={{width: "900px"}}>
        <div className='donatur'>
           <p>Total Donatur</p>
        <img src="./Images/give-money.png" alt="" />
      </div>
       
        <h1>786.552.000</h1>
          </div>
     <div className='total' style={{marginLeft: "25px", width: "900px"}}>
        <div className='donatur'>
           <p>Total Donatur</p>
        <img src="./Images/give-money.png" alt="" />
      </div>
       
        <h1>786.552.000</h1>
      </div>
     </div>
          
          {/* TABLE */}
      <div className='table'>
      <div className="table-header">
          <p>Riwayat Transaksi</p>

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
        
        <Table2/>

     </div> 
      
 </>
  )
}

export default Saldo