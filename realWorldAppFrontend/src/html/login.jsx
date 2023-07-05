import React, { useEffect, useState } from 'react';
import './css/login.css';
import './css/settings.css';

function Login(props) {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => {
        console.log({ data });
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLogin = () => {
    if (data && username === data.name && password === data.password) {
      setIsValid(true);
      if (typeof props.isValidLogin === 'function') {
        props.isValidLogin(true);
      }
      window.location.replace('http://localhost:5173/setting');
    } else {
      setIsValid(false);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className="header">
        <h1>[$] Real World App</h1>
        <div>
          <a href="#" className="button_green" style={{ marginTop: '1em', float: 'left', clear: 'both' }}>
            $ New
          </a>
          <a
            href="#"
            style={{
              float: 'right',
              marginTop: '0.5em',
              padding: '30px',
              background: "url('https://api.iconify.design/mi/notification.svg') no-repeat center center / contain",
            }}
          ></a>
        </div>
      </div>
      <div className="container" style={{ width:"50vw",marginLeft:"auto",marginRight:"25%"}}>
  <div className="content" style={{ width: "100%", height: "auto" }}>
    <div className="left-section">
      {isValid === false ? <span style={{ color: 'red' }}>WRONG NAME OR PASSWORD</span> : ''}
      <label style={{ marginTop: "10px", float: "left",width:"85%" }}  className="username">
        <div>Username:</div>
        <input className="inputUser" type="text" style={{ marginTop: "10px", float: "left",width:"85%" }} onChange={handleUsernameChange} />
      </label>
      <label style={{ marginTop: "10px", float: "left",width:"85%" }}  className="password" >
        <div >Password:</div>
        <input style={{ marginTop: "10px", float: "left",width:"85%" }} type="password" onChange={handlePasswordChange} />
      </label>
      <div>
        <button type="button" className='button' style={{ marginTop: "10px", float: "left" }}  onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
</div>
      <div>

      </div>
    </div>

  );
}

export default Login;
