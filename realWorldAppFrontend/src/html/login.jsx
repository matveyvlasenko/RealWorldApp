import React, { useEffect, useState } from 'react';
import './css/login.css';
import './css/settings.css';

function Login(props) {
  const [data, setData] = useState(null); // Stores the fetched data
  const [username, setUsername] = useState(''); // Stores the value of the username input field
  const [password, setPassword] = useState(''); // Stores the value of the password input field
  const [isValid, setIsValid] = useState(null); // Tracks the validity of the login credentials

  useEffect(() => {
    // Fetches data from a given API endpoint on component mount
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
    // Handles the login process
    if (data && username === data.name && password === data.password) {
      setIsValid(true); // Sets the login validity to true
      if (typeof props.isValidLogin === 'function') {
        props.isValidLogin(true); // Calls the parent component's isValidLogin function with the argument true
      }
      window.location.replace('http://localhost:5173/setting'); // Redirects the user to the settings page
    } else {
      setIsValid(false); // Sets the login validity to false
    }
  };

  const handleUsernameChange = (event) => {
    // Updates the username state on input change
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // Updates the password state on input change
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