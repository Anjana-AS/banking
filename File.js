import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Filestyle.css';


function File({pic8}) {
  const [footerUp, setFooterUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const footerToggle = () => {
    setFooterUp(!footerUp);
  };
  const handleTransactionHistory = () => {
    navigate('/Page');
  };
  const handleExit = () => {
    navigate('/');
  };
  const handleSub = () => {
      setErrorMessage('Please fill all the forms');
  };
  

  return (
    <div>
      <div className="header1">Customer Accounts Maintenance</div>
      <div className='header9'><button className="btn ne"><u>New</u></button></div>
      <div className='header7'><button className="btn hi"onClick={handleTransactionHistory}><u>Transaction History</u></button></div>
      <div>
        <p className='cust'>Customer No*</p>
        <input type="text" className='draw1' />
      </div>
      <div>
        <p className='cur'>Currency*</p>
        <input type="text" className='draw2' />
      </div>
      <div>
        <p className='stat'>Account Class*</p>
        <input type="text" className='draw3' />
      </div>
      
      <button className='btn fetcho'> Fetch </button>
      <label htmlFor="accountClassType" className='acttype'>Account Class Type</label>
      <input type="text" className='draw4' />
      <form>
        <label><input type="checkbox" className="true" />
          <p class='sang'> Special Acc No Generation</p>
        </label>
      </form>

      <p className='sd'> SD User Reference </p>   <input type="text" className='draw5' />
      <p className='aux'> Auxiliery</p>
      <p className='nom'>Nominee </p>
      <p className='cl'> Check List</p>
      <p className='ad'>Account Description </p><input type="text" className='draw14 ' />
      <p className='at'>Account Type </p>
      
      <input id="single" type="radio" name="accountType" className='buttonok' />
      <label htmlFor="single" className=" single">Single</label>
      <input id="joint" type="radio" name="accountType" className='buttonozy' />
      <label htmlFor="joint" className="joint">Joint</label>
      <form method="post" > <label for="opr" ></label>
        <p className='mode'>Mode of Operation</p>
        <select id="opr" name="opr" className='oprat'>
          <option value="1"></option>
          <option value="2" className='on'>Online</option>
          <option value="3" className='off'> Offline</option>
        </select>
      </form>

      <p className='acd'>Account Open Date</p> <input type="text" className='draw6' />
      <p className='ac'>Address Code</p><input type="text" className='draw13' />
      <p className='add'>Address 1</p><input type="text" className='draw8' />
      <p className='addd'>Address 2</p><input type="text" className='draw9' />
      <p className='adddd'>Address 3</p><input type="text" className='draw10' />
      <p className='addddd'>Address 4</p><input type="text" className='draw11' />
      <p className='pin'>Pincode</p><input type="text" className='draw12' />
      <p className='loc'>Location*</p><input type="text" className='draw7' />
      <p className='afi'>Account Facilities</p><hr className='draw15' />

      <input type="checkbox" className="checkone" />
      <label htmlFor="chequeBook" className='form-check-label cb'>Cheque Book</label>

      <input type="checkbox" className="checktwo" />
      <label htmlFor="passbook" className='form-check-label pb'>Passbook</label>

      <input type="checkbox" className="checkthree" />
      <label htmlFor="casaccount" className='form-check-label cas'>CAS Account</label>

      <input type="checkbox" className="checkfour" />
      <label htmlFor="atmaa" className='form-check-label atm'>ATM</label>

      <input type="checkbox" className="checkfive" />
      <label htmlFor="direct" className='form-check-label db'>Direct Banking</label>

      <p className='if'>Initial Funding </p> <hr className='draw17'></hr>
      <p className='aoa'>Account Opening Amount </p> <input type="text" className='draw18' />
      <p className='pio'> Pay in Option</p>

      <input type="radio" name="buttons" className='button2' />
      <label htmlFor="pay" className="pay" >Pay in By Account</label>
      <input type="radio" name="buttons" className='button3' />
      <label htmlFor="payin" className="payin"> Pay in By GL</label>

      <p className='ob'> Offset Branch</p>  <input type="text" className='draw19' />
      <p className='oa'>Offset Account </p> <input type="text" className='draw20' />

      <input type="checkbox" className="waive" />
      <p class='waoc'> Waive account Opening Charges</p>

      <p className='cn'>Customer Name </p>  <input type="text" className='draw21' />
      <p className='accc'>Account * </p>  <input type="text" className='draw22' />
      <p className='brn'>Branch * </p>
      <p className='zero'>000 </p>
      <p className='mca'>Multi Currency Account </p> <input type="text" className='draw24' />

      <input type="checkbox" className="pri" />
      <p class='priv'>Private Customer</p>
      <p className='opt'> Options</p> <hr className='draw16'></hr>
      <input type="checkbox" className="repli" />
      <p class='rcs'> Replicate Customer Signature</p>
      <input type="checkbox" className="sal" />
      <p class='sa'>Salary Account</p>
      <input type="checkbox" className="ib" />
      <p class='iban'> IBAN Required</p>

      <p className='ibana'>IBAN Account Number </p> <input type="text" className='draw25' />
      <p className='aan'>Alternate Account Number  </p> <input type="text" className='draw26' />
      <p className='cbc'>Clearing Bank Code </p>  <input type="text" className='draw27' />
      <p className='can'>Clearing Account Number </p>  <input type="text" className='draw28' />
      <button className='btn aad'> Amounts And Dates</button>
      <button className='btn main'>Main</button>

      <div className='footerthere'>
        <button className="btn exito" onClick={handleExit}>Exit</button>
        <button className="btn sub" onClick={handleSub}>Submit</button>
    
    {errorMessage && (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '5px' }}>
          <img src={pic8} alt="error" className="mistake" />
          <p className="mis">{errorMessage}</p>
        </div>
      )}


        <p className=' maker'>Maker</p>
        <p className=' checker'>Checker</p>
        <p className='date'>Date Time:</p>
        <p className='time'>Date Time:</p>
        <p className='mod'>Mod No:</p>
        <p className='reco'>Record Status</p>
        <p className='auth'>Authorization Status</p>
      </div>
      <div className={`footerup ${footerUp ? 'risen' : ''}`}>
        <button onClick={footerToggle} className="btn arrow">^</button>

        <div className="button-container">
          <button className='footerupbtn'> Interest</button >
          <button className='footerupbtn'> Charges</button>
          <button className='footerupbtn'> Consolidated Charges</button>
          <button className='footerupbtn'>BIC </button>
          <button className='footerupbtn'> Instructions</button>
          <button className='footerupbtn'>Standing Instructions </button>
          <button className='footerupbtn'> Linked Entities</button>
          <button className='footerupbtn'>Reg </button>
          <button className='footerupbtn'>Account Status </button>
          <button className='footerupbtn'> Restrictions</button>
          <button className='footerupbtn'>Currency Limits </button>
          <button className='footerupbtn'> MIS</button>
          <button className='footerupbtn'>Statement </button>
          <button className='footerupbtn'> Limits</button>
          <button className='footerupbtn'>Joint Holders </button>
          <br></br>
          <button className='footerupbtn'> Fields</button>
          <button className='footerupbtn'>Deposits Instruction </button>
          <button className='footerupbtn'>Billing Parameters </button>
          <button className='footerupbtn'> Account Signatory</button>
          <button className='footerupbtn'> Interim Transactions Report </button>
          <button className='footerupbtn'> Notice</button>
          <button className='footerupbtn'> Cards</button>
          <button className='footerupbtn'> Statistics</button>
          <button className='footerupbtn'>Cheque Book Request </button>
          <button className='footerupbtn'> Debit Card Request</button>
          <button className='footerupbtn'>Sweep in Setup </button>
          <button className='footerupbtn'> Documents</button>
          <br></br>
          <button className='footerupbtn'>Banking Channels </button>
          <button className='footerupbtn'> Change Log</button>
        </div>
      </div>
    </div>
  );
}
export default File;