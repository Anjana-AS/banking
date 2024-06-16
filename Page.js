import React from 'react';
import './Pagestyle.css';
import { useNavigate } from 'react-router-dom';

function Page( {image1,image2,image3}) {
  const Navigate=useNavigate();
  const handleOut=()=>{
    Navigate('/');
  }
  const handleRep=()=>{
    Navigate('/Note');
  }
  return (
    <div className="App">
  <header className='head'>
  <div>
    <img src={image1} className="img-fluid header-image-1" alt="img-fluid header-image-1"/>
  </div>
  <div className='text'>Transaction History </div>
</header>

      <table className='totable'>
        <thead>
          <tr>
            <th className='tran'>Tran Date</th>
            <th className='due'>Due Date</th>
            <th className='amount'>Amount</th>
            <th className='null'></th>
            <th className='desc'>Description</th>
            <th className='check'>Check</th>
            <th className='who'>Who</th>
            <th className='bal'>Balance</th>
            <th  className='rec'>Receipt</th>
            <th className='balance' >Balance Paid</th>
            <th className='int'>Interest</th>
            <th className='fee'>Fees</th>
            <th className='note'>Note Paid</th>
          </tr>
        </thead>
      </table>

      <table className="mytable" >
        <tbody>
        <tr className='blank' contentEditable="true">
            <td style={{ width: '94px'}}> </td>
            <td style={{ width: '94px' }}></td>
            <td style={{ width: '102px' }}></td>
            <td  style={{ width: '28px' }}></td>
            <td style={{ width: '166px' }}></td> 
            <td style={{ width: '98px' }}></td>
            <td style={{ width: '54px' }}></td>
            <td style={{ width: '108px' }}></td>
            <td style={{ width: '106px' }}></td>
            <td style={{ width: '126px' }}></td>
            <td style={{ width: '100px' }}></td>
            <td style={{ width: '100px' }}></td>
            <td style={{ width: '160px' }}></td>
          </tr>
          <tr className='colors' contentEditable="true">
          <td></td>
          <td></td>
          <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr className='blank' contentEditable="true">
        <td></td>
          <td></td>
          <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr className='colors'  contentEditable="true">
        <td></td>
          <td></td>
          <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        </tbody>
      </table>

      <footer className='foot'>
<button className='btn exit'onClick={handleOut}>
   <div><img src={image2} className="img-fluid header-image-2" alt="img-fluid header-image-2" /> Exit</div></button>
   <button className='btn print'>
   <div><img src={image3} className="img-fluid header-image-3" alt="img-fluid header-image-3"/> Print Listing</div></button>
   <button className=' btn butt' onClick={handleRep}> Reprint Highlighted Receipt</button>
    </footer>
    </div>
  );
}
export default Page;
