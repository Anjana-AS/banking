import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginstyle.css';

const Login = ({ pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8 }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setUsernameTouched(true);

    if (/^[a-zA-Z_]*$/.test(value)) {
      setUsernameErrorMessage('');
      setIsValidUsername(true);
    } else {
      setUsernameErrorMessage('Username should contain only characters and underscores.');
      setIsValidUsername(false);
    }
    if (!usernameTouched) {
      setUsernameErrorMessage('');
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordTouched(true);
    if (!value.trim()) {
      setPasswordErrorMessage('');
    } else if (value.length < 8) {
      setPasswordErrorMessage('Password should be at least 8 characters long.');
    } else {
      setPasswordErrorMessage('');
      setErrorMessage('');
    }
 
  };

  const handleLogin = () => {
    if (!username.trim() && !password.trim()) {
      setErrorMessage('Please enter both username and password.');
      return;
    }
    if (!username.trim()) {
      setErrorMessage('Please enter your username.');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Please enter your password.');
      return;
    }
    if (/^[a-zA-Z_]*$/.test(username) && password.length >= 8) {
      navigate('/File'); 
    } else {
      setErrorMessage('Please recheck your entered username and password'); 
    }
  };

  const reg = () => {
    console.log('Register Online clicked!');
  };

  useEffect(() => {
    const handleCheckboxClick = () => {
      setChecked((prevChecked) => !prevChecked);
    };
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('click', handleCheckboxClick);
    return () => {
      checkbox.removeEventListener('click', handleCheckboxClick);
    };
  }, []);

  return (
    <div>
      <div className="name">
        <img src={pic4} className="pic4" alt="pic" />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          onBlur={() => setUsernameTouched(false)}
          placeholder="Enter username"
          style={{
            width: '360px',
            paddingLeft: '40px',
            WebkitTextFillColor: 'hsl(208.24deg 11.56% 71.18%)',
            border: '1px solid  hsl(180deg 1.92% 79.61%)',
          }}
        />
      </div>
      <div className="pass">
        <img src={pic2} className="pic2" alt="pic" />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => setPasswordTouched(false)}
          placeholder="Enter password"
          style={{
            width: '360px',
            border: '1px solid  hsl(180deg 1.92% 79.61%)',
            paddingLeft: '40px',
            WebkitTextFillColor: 'hsl(208.24deg 11.56% 71.18%)',
          }}
        />
      </div>
      <div className="flexContainer">
        <p className="sito">
          <img src={pic6} className="pic6" alt="pic6" />
          You are logging into a secure site
          <img src={pic5} className="pic5" alt="pic5" />
        </p>
      </div>
      <header className="App-header">
        <img src={pic1} className="pic1" alt="pic1" />
        <img src={pic3} className="pic3" alt="pic3" />
      </header>

      {usernameErrorMessage && usernameTouched && (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '5px' }}>
          <img src={pic8} alt="error" className="seterror" />
          <p className="seterror-message">{usernameErrorMessage}</p>
        </div>
      )}
      
      {(passwordErrorMessage && passwordTouched) && (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '5px' }}>
          <img src={pic8} alt="error" className="errors" />
          <p className="setpasserror-message">{passwordErrorMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '5px' }}>
          <img src={pic7} alt="error" className="error" />
          <p className="error-message">{errorMessage}</p>
        </div>
      )}

      <div className="container mt"> 
       <div><b className="user">User Name</b></div>
        <div><b className="word">Password</b></div>
        <h1 className="btn welcm">Welcome to Internet Banking</h1>
        <h4 className="btn simple">If you don't already use Internet Banking, it's simple to</h4>
        <button className="btn reg" onClick={reg}>Register Online</button>
        <h5 id="checkbox" className={`btn check ${isChecked ?'checked':''}`}>Remember my username on this computer</h5>
        <button className="btn log" onClick={handleLogin}>Login</button>
        <button className="btn forgot">Forgot Password?</button>
        <button className="btn enable">Enable Login ID</button>
        <hr className="line"></hr>
        <h6 className="btn tick"> Don't tick this box if you are using a public or shared computer</h6>
      </div>
    </div>
  );
};
export default Login;
