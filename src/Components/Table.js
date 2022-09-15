import React from 'react'
import "../Styles/Table.css"
const Table = () => {
  return (
      <>
<table>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Email</th>
      <th>Waktu Terakhir Donasi </th>
      <th>Donasi  Terakhir</th>
      <th>Total Donasi </th>
      <th>Domisili</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alexander</td>
      <td>Alex@email.com</td>
      <td>13/07/2022 &bull; 19.34</td>
      <td className='green'>+Rp1.000.000</td>
      <td>Rp121.000.000</td>
      <td>Jawa Timur</td>
    </tr>
            
    <tr>
      <td>Ram</td>
      <td>Ram@email.com</td>
      <td className='white'>13/07/2022 &bull; 19.34</td>
      <td className='green'>+Rp250.000</td>
      <td>Rp120.250.000</td>
      <td>D.K.I Jakarta</td>
    </tr>
     <tr>
      <td>Rem</td>
      <td>Rem@email.com</td>
      <td className='white'>13/07/2022 &bull; 19:34</td>
      <td className='green'>13/07/2022 &bull; 19:34</td>
      <td>+Rp500.000</td>
      <td>Jawa Barat</td>
      </tr>
    <tr>
      <td>Emilia</td>
      <td>Emi@email.com</td>
      <td className='white'>13/07/2022 &bull; 19:34</td>
      <td className='green'>+Rp100.000</td>
      <td>Rp7.000.000</td>
      <td>Jawa Tengah</td>
    </tr>
    <tr>
      <td>Kazuma</td>
      <td>Kzm@email.com</td>
      <td>13/07/2022 &bull; 19:34</td>
      <td className='green'>+Rp52.250</td>
      <td>Rp4.502.250</td>
      <td>Sumatera Selatan</td>
    </tr>
  </tbody>
  
      </table>
      
        {/* PIGNATION */}
      <div className='pignation'>
        <span>
          <img src="./Images/arrow-left.png" alt="" />
        </span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>8</span>
          <span>9</span>
        <span>
          <img src="./Images/arrowright1.png" alt="" />
          </span>
      </div>
      </>
  )
}

export default Table