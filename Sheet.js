import React from 'react';
import './Sheetstyle.css';
import {useNavigate} from 'react-router-dom';

function Sheet({photo1,photo2}) {
  const Navigate=useNavigate();
  const handleCan=()=>{
    Navigate('/');
  }

  return (
    <div>
     <div className="header5">Customer Account MIS</div>

    
        
        <div><p className='appl'>Application Number*</p><input type="text" className='line1' /> 
        <img src={photo1} className="photo1" alt="photo1"/> </div>
        <p className=' custo'> Customer*</p><input type="text" className='line2' />
       <p className=' brnh'>Branch *</p><input type="text" className='line3' />
       <div><p className='accnt '>Account *</p><input type="text" className='line4' />
        <img src={photo1} className="photo12" alt="photo1"/></div>
        <p className='cls '> Account Class*</p><input type="text" className='line5' />
        <p className=' cu'> Currency*</p><input type="text" className='line6' />

        <p className='trn'>Transaction MIS </p> <hr className='line7'></hr>
       <div> <p className='trn1'>Transaction MIS 1 </p> 
       <input type="text" className='line8' />
        <img src={photo2} className="photo2" alt="photo2"/> </div>
        <div><p className='trn2'>Transaction MIS 2 </p> 
        <input type="text" className='line9' />
        <img src={photo2} className="photo21" alt="photo2"/> </div>
        <div>  <p className='trn3'>Transaction MIS 3 </p> 
        <input type="text" className='line10' />
        <img src={photo2} className="photo22" alt="photo2"/> </div>
        <div><p className='trn4'>Transaction MIS 4</p> 
        <input type="text" className='line11' />
        <img src={photo2} className="photo23" alt="photo2"/> </div>
        <div><p className='trn5'>Transaction MIS 5 </p> 
        <input type="text" className='line12' />
        <img src={photo2} className="photo24" alt="photo2"/> </div>
        <div> <p className='trn6'>Transaction MIS 6 </p> 
        <input type="text" className='line13' />
        <img src={photo2} className="photo25" alt="photo2"/> </div>
        <div> <p className='trn7'>Transaction MIS 7 </p>
         <input type="text" className='line14' />
        <img src={photo2} className="photo26" alt="photo2"/> </div>
        <div> <p className='trn8'>Transaction MIS 8 </p> 
        <input type="text" className='line15' />
        <img src={photo2} className="photo27" alt="photo2"/> </div>
        <div> <p className='trn9'>Transaction MIS 9</p> 
         <input type="text" className='line16' />
        <img src={photo2} className="photo28" alt="photo2"/> </div>
        <div><p className='trn10'>Transaction MIS 10</p> 
         <input type="text" className='line17' />
        <img src={photo2} className="photo29" alt="photo2"/> </div>



         <p className='calcm'>Calc Method</p>
        <select id="opr" name="opr" className='chose'>
          <option value="1"></option>
        </select>
        <p className=' type'> Rate code</p>
        <p className='rate'>Rate type</p><input type="text" className='line18' />
        <select id="rat" name="rat" className='rat'>
          <option value="1"></option>
          <option value="2" className='on'>Fixed</option>
          <option value="3" className='off'> Unfixed</option>
        </select>
        <p className='ref'>Reference Rate </p><input type="text" className='line19' />
        <p className='spr'> Spread</p><input type="text" className='line20' />

        <p className='com'>Composite MIS </p><hr className='line21'></hr>
        <div><p className='com1'>Composite MIS 1 </p> <input type="text" className='line22' />
        <img src={photo2} className="im1" alt="photo2"/> </div>
        <div><p className='com2'>Composite MIS 2 </p><input type="text" className='line23' />
        <img src={photo2} className="im2" alt="photo2"/> </div>
        <div> <p className='com3'>Composite MIS 3 </p><input type="text" className='line24' />
        <img src={photo2} className="im3" alt="photo2"/> </div>
        <div> <p className='com4'>Composite MIS 4 </p><input type="text" className='line25' />
        <img src={photo2} className="im4" alt="photo2"/> </div>
        <div><p className='com5'>Composite MIS 5 </p><input type="text" className='line26' />
        <img src={photo2} className="im5" alt="photo2"/> </div>
        <div> <p className='com6'>Composite MIS 6 </p><input type="text" className='line27' />
        <img src={photo2} className="im6" alt="photo2"/> </div>
        <div> <p className='com7'>Composite MIS 7 </p><input type="text" className='line28' />
        <img src={photo2} className="im7" alt="photo2"/> </div>
        <div> <p className='com8'>Composite MIS 8 </p><input type="text" className='line29' />
        <img src={photo2} className="im8" alt="photo2"/> </div>
        <div> <p className='com9'>Composite MIS 9</p><input type="text" className='line30' />
        <img src={photo2} className="im9" alt="photo2"/> </div>
        <div> <p className='com10'>Composite MIS 10</p><input type="text" className='line31' />
        <img src={photo2} className="im10" alt="photo2"/> </div>

        <input id="pool" type="radio" name="accountType" className='buttonpool' />
      <label htmlFor="pool" className=" pool">Pool Code</label>
      <input id="accoun" type="radio" name="accountType" className='buttonaccoun' />
      <label htmlFor="accoun" className="accoun">Account Level</label>
      

      <div><p className='pools'> Pool Code</p><input type="text" className='line32' />
      <img src={photo2} className="dp1" alt="photo2"/> </div>
        <form>
        <label><input type="checkbox" className="special" />
          <p class='link'> Link to Group</p>
        </label>
      </form>
      <div><p className='mist'> MIS Group</p><input type="text" className='line33' />
        <img src={photo2} className="dp2" alt="photo2"/> </div>
        <button className='btn defn'> Default MIS Group</button>

      <p className='cost'>Cost MIS</p><hr className='line34'></hr>
     <div> <p className='cost1'>Cost MIS 1</p><input type="text" className='line35' />
      <img src={photo2} className="frame1" alt="photo2"/> </div>
      <div> <p className='cost2'>Cost MIS 2</p><input type="text" className='line36' />
      <img src={photo2} className="frame2" alt="photo2"/> </div>
      <div> <p className='cost3'>Cost MIS 3</p><input type="text" className='line37' />
      <img src={photo2} className="frame3" alt="photo2"/> </div>
      <div> <p className='cost4'>Cost MIS 4</p><input type="text" className='line38' />
      <img src={photo2} className="frame4" alt="photo2"/> </div>
      <div> <p className='cost5'>Cost MIS 5</p><input type="text" className='line39' />
      <img src={photo2} className="frame5" alt="photo2"/> </div>
    

     <div className='down'>
     <button className='one'>Ok</button>
     <button className='two'onClick={handleCan}>Cancel</button>
     </div>

     <div className='up'>  
     <p className='log1'>Change Log</p>
     <p className='log2'>Transfer Log </p>
     </div>

  </div>
  )
}

export default Sheet;