import React from 'react'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar'
import './scholars.css'

const Scholars = () => {
  return (
    <div>
      <Navbar/>

<div class="page-main1">
  <div>
    <Sidebar/>
  </div>
  <div className='pamain1'>
  <table style={{borderCollapse:'collapse',border: '1px solid black'}}>
      <thead>
      <tr>
          <th>S.No</th>
          <th>Name of the Scholar</th>
          <th>Name of the Scholar
Year of admission
</th>
          <th>University in which enrolled</th>
          <th>Supervisor/ Co-Supervisor</th>
          <th>RegNo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>R. Suresh Babu</td>
        <td>2019</td>
        <td>Annamalai University, Tamilnadu</td>
        <td>Dr. B.S.Diwakar</td>
        <td>1917150001</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>2</td>
        <td>K. A. S. V. R. Sai Phani Kumar</td>
        <td>2021</td>
        <td>GIET, Gunupur, Odisha</td>
        <td>Dr. Venu Reddy</td>
        <td>21WDCY-01</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>3</td>
        <td>M.V. Lakshmi</td>
        <td>2023</td>
        <td>GIET, Gunupur, Odisha</td>
        <td>Dr. B.S.Diwakar</td>
        <td>23SPHCH002</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>4</td>
        <td>P. PRASAD</td>
        <td>2023</td>
        <td>GIET, Gunupur, Odisha</td>
        <td>Dr. B.S.Diwakar</td>
        <td>23SDCY-05</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>5</td>
        <td>M. Shanmukha Rao</td>
        <td>2023</td>
        <td>GIET, Gunupur, Odisha</td>
        <td>Dr. Venu Reddy</td>
        <td>23SDCY-04</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>6</td>
        <td>Narasimha Murthy</td>
        <td>2023</td>
        <td>GIET, Gunupur, Odisha</td>
        <td>Dr. Venu Reddy</td>
        <td>23SDCY-03</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>7</td>
        <td>Ch Lakshmi Prasanna</td>
        <td>2023</td>
        <td>GIET, Gunupur, Odisha</td>
        <td>Dr. Venu Reddy</td>
        <td>23WDCY-02</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>8</td>
        <td>B Iswarya Lakshmi</td>
        <td>2023</td>
        <td>GIET, Gunupur, Odisha</td>
        <td>Dr. B.S.Diwakar</td>
        <td>23WDCY-03</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>9</td>
        <td>Nagaraju Gundimeda</td>
        <td>2024</td>
        <td>JNTUK Kakinada</td>
        <td>Dr. B.S.Diwakar</td>
        <td>23022PCY03</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>10</td>
        <td>V Santhoshi Pravallika</td>
        <td>2024</td>
        <td>JNTUK Kakinada</td>
        <td>Dr. Venu Reddy</td>
        <td>23022PCY04</td>
        <td>Ongoing</td>
        </tr>
        <tr>
        <td>11</td>
        <td>Mummidi Siva Sankar</td>
        <td>2024</td>
        <td>JNTUK Kakinada</td>
        <td>Dr. P. Bhavani</td>
        <td>23022PCY05</td>
        <td>Ongoing</td>
        </tr>
        
      </tbody>
    </table>
  </div>
  </div>
      
  </div>
  )
}

export default Scholars