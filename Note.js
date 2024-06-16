import React from 'react';
import './Notestyle.css';
import {useNavigate} from 'react-router-dom';

function Sheet({photo1,photo2, datepic}) {
  const Navigate=useNavigate();
  const handleExito=()=>{
    Navigate('/');
  }
  const handleAud=()=>{
    Navigate('/Sheet');
  }
  return (
    <div>
     <div className="headera">Corporate Loan Application Entry</div>
     <div className='headerb'>
      <p className='save'>Save</p>
      <p className='hold'>Hold</p>
     </div>

     <div><p className='app'>Application Category  *</p><input type="text" className='li1' />
     <img src={photo2} className="pict1" alt="photo2"/> </div>
    <div> <p className='pro'> Product code  *  </p><input type="text" className='li2' />
     <img src={photo2} className="pict2" alt="photo2"/> </div>
     <div><p className='des '> Description  </p><input type="text" className='li3' />
     <img src={photo1} className="pict3" alt="photo1"/> </div>
     <p className=' aplbr'> Application Branch  </p><input type="text" className='li4' />
     <p className='apldt '> Application Date  </p><input type="text" className='li5' />
    
     <p className=' main'> Main  </p>
     <p className=' details'>  Details </p>
     <p className=' finan'> Financials  </p>
     <p className='reque '> Requested  </p>
      <button className='limits'> Limits</button>
     <p className='comm '> Comments  </p>


    <p className=' lia1'> Liability Details  </p> <hr className='dot6'></hr>
  
     <div> <p className=' lia2'> Liability Number  </p><input type="text" className='dot7' />
     <img src={photo2} className="pictu2" alt="photo2"/> </div>
     <div> <p className=' lia3'> Liability Name  </p><input type="text" className='dot8' />
     <img src={photo1} className="pictu3" alt="photo1"/> </div>
     <div><p className='lia4 '> Main Liability No </p><input type="text" className='dot9' />
     <img src={photo2} className="pictu4" alt="photo2"/> </div>
     <div> <p className=' lia5'>  Liability Branch </p><input type="text" className='dot10' />
     <img src={photo2} className="pictu5" alt="photo2"/> </div>
     <div> <p className=' lia6'>  Liability Currency</p><input type="text" className='dot11' />
     <img src={photo2} className="pictu6" alt="photo2"/> </div>
     <p className=' lia7'> Overall Limit  </p><input type="text" className='dot12' />

     <div className='footer4'>  
     <p className='doc1 '>Documents   </p>
     <p className='doc2 '>Trade in   </p>
     <p className=' doc3'> Customer Channel  </p>
     <p className='doc4'> Account Channel  </p>
       <p className=' doc5'> KYC Review  </p>
     <p className=' doc6'> Customer Dedupe  </p>
     <p className='doc7 '> Loan Dedupe  </p>
     <p className='doc8'> Customer MIS  </p>
  <p className='doc9'> Customer Account MIS  </p>
  </div>

  <div><p className='lead '> Lead Id  </p> <input type="text" className='dull13' />
     <img src={photo2} className="pictut8" alt="photo2"/> </div>
     <div> <p className=' enquiry'> Enquiry ID </p> <input type="text" className='dull14' />
     <img src={photo2} className="pictut9" alt="photo2"/> </div>
     <button className='def'>Default</button>

     
     <p className=' may1'> Line Details  </p><hr className='ten'></hr>
     <div><p className='may2'> Line Code  </p><input type="text" className='ten1' />
     <img src={photo2} className="pi1" alt="photo2"/> </div>
     <p className='may3'> Line Serial  </p><input type="text" className='ten2' />
     <p className='may4 '> Main Line Code  </p><input type="text" className='ten3' />
     <div> <p className=' may5'> Line Branch  </p><input type="text" className='ten4' />
     <img src={photo2} className="pi2" alt="photo2"/> </div>
    <div> <p className=' may6'> Line Currency  </p><input type="text" className='ten5' />
     <img src={photo2} className="pi3" alt="photo2"/> </div>
     <p className=' may7'> Limit Amount  </p><input type="text" className='ten6' />
     <p className=' may8'> Effective Line Amount Basis  </p>
        <select id="no" name="no" className='no'>
          <option value="1"></option>
          <option value="2" className='onn'>Limit</option>
          <option value="3" className='offf'> No Limit</option>
        </select>

      <div><p className='numb '> Aplication Number *  </p><input type="text" className='even' />
        <img src={photo1} className="picture" alt="photo1"/> </div>
     <p className=' userr'> User Reference *  </p><input type="text" className='odd' />
     <p className=' prio'> Priority  </p>
     <select id="ok" name="ok" className='ok'>
          <option value="1"></option>
          <option value="2" className='onnn'>Low</option>
          <option value="3" className='offff'> High</option>
        </select>
     <p className=' status'> Status </p>
     <select id="okk" name="okk" className='okk'>
          <option value="1"></option>
          <option value="2" className='onnnn'>New Application</option>
          <option value="3" className='offfff'>Old Application</option>
        </select>
 
     <p className=' avail'> Availability </p><hr className='there'></hr>


     <div><p className='start '> Start Date  </p><input type="date" className='sdp'/>
     <img src={datepic} className="datepic1" alt="datepic"/> </div>
     <div><p className='exp '>  Expiry Date </p><input type="date" className='ed'/>
     <img src={datepic} className="datepic2" alt="datepic"/> </div>
     <div> <p className=' last'>  Last Available Date </p><input type="date"  className='lad'/>
     <img src={datepic} className="datepic3" alt="datepic"/> </div>
     <div><p className=' remark'>  Remarks </p><input type="text" className='heres' />
    <img src={photo1} className="pictures" alt="datepic"/> </div>

  
     <form>
        <label><input type="checkbox" className="boxy" />
        <p className=' revo'>  Revolving Line </p>
        </label>
      </form>

      <p className='footer9'>,</p>  
<p className='prev '> Previous Remarks  </p>
     <p className=' rema'> Remarks  </p>
     <button className='onee'onClick={handleAud}>Audit</button>
     <button className='twoo'onClick={handleExito}>Exit</button>
 

     <p className=' out'> Outcome  </p>
        <select id="come" name="come" className='come'>
          <option value="1"></option>
          <option value="2" ></option>
          <option value="3" ></option>
        </select>
  </div>
  )
}

export default Sheet;