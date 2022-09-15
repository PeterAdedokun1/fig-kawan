import React from 'react'
import "../Styles/Table.css"
const Table = () => {
  return (
      <>
<table>
  <thead>
    <tr>
      <th>Nama Campaign</th>
      <th>Jenis Transaksi</th>
      <th>Traggal Transaksi</th>
      <th>JumIah</th>
      <th>Jumlah terpotong fee (2,9%)</th>
      <th>Deskrisi</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Campaign C</td>
      <td>Donasi masuk</td>
      <td>13/07/2022 &bull; 19.34</td>
      <td className='green'>+Rp250.000</td>
      <td>Rp242.500</td>
      <td>Donasi dari(nama)</td>
      <td className='status'>Berhasil</td>
    </tr>
            
    <tr>
      <td>Compaign A </td>
      <td>Donasi masuk</td>
      <td className='white'>13/07/2022 &bull; 19.34</td>
      <td className='green'>+Rp500.000</td>
      <td>+Rp485.000</td>
      <td>Donasi dari(nama)</td>
      <td className='status'>Berhasil</td>
    </tr>
     <tr>
      <td>Compaign B</td>
      <td>Donasi Masuk</td>
      <td className='white'>13/07/2022 &bull; 19:34</td>
      <td className='green'>+Rp100.000</td>
      <td>+Rp97.000</td>
      <td>Donasi dari(nama)</td>
      <td className='status'>Berhasil</td>
      </tr>
    <tr>
      <td>Campaign B</td>
      <td>Emi@email.com</td>
      <td className='white'>13/07/2022 &bull; 19:34</td>
      <td className='green'>+Rp100.000</td>
      <td>Rp7.000.000</td>
      <td>Jawa Tengah</td>
      <td className='status'>Berhasil</td>
    </tr>
    <tr>
      <td>Campaign B</td>
      <td>Donasi masuk</td>
      <td>13/07/2022 &bull; 19:34</td>
      <td className='green'>+Rp52.250</td>
      <td>+Rp50.682</td>
      <td>Donasi dari(nama)</td>
      <td className='status'>Berhasil</td> 
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