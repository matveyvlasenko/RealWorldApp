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
          <a href="#" className="button_green">
            $ New
          </a>
          <a href="#" className="notification">
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="left-section">
            {isValid === false ? <span className="error-message">WRONG NAME OR PASSWORD</span> : ''}
            <label className="username">
              <div>Username:</div>
              <input className="inputUser" type="text" onChange={handleUsernameChange} />
            </label>
            <label className="password">
              <div>Password:</div>
              <input type="password" onChange={handlePasswordChange} />
            </label>
            <div>
              <button type="button" className="button" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;