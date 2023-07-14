import React, { useEffect, useState } from 'react';
import './css/settings.css';
import './css/bankAccounts.css';

import ImageDefault from './img/defaultImage.jpg'

const TransferMenu = () => {

    //example use fetch to import data another application
    useEffect(() => {
        fetch('http://localhost:8081/users')
            .then(res => res.json())
            .then(data => console.log({ data }))
    }, [])



    return (
        <div className='Page'>

<div className="area"></div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="http://localhost:5173/setting">
                            <i id='imageUser'>
                                <img src={ImageDefault} alt="User" style={{ height: "55px", width: "auto",marginRight:"10px" }} />
                            </i>
                            <span className="nav-text">
                                Solera@solera.com
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:5173/setting">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Home
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="http://localhost:5173/setting">
                            <i className="fa fas fa-bookmark	 fa-2x"></i>
                            <span className="nav-text">
                                My account
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fab fa-bitcoin	 fa-2x"></i>
                            <span className="nav-text">
                                Bank Accounts
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa far fa-bell	 fa-2x"></i>
                            <span className="nav-text">
                                Notifications
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:5173/">
                            <i className="fa fas fa-ban	 fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header">
                <h1 >[$] Real World App</h1>
                <div>
                    <a href="#" className="button_green" style={{marginTop:"1em",float:"left",clear:"both"}}>$ New</a>
                    <a href="#"style={{float:"right",marginTop:"0.5em",padding:"30px",background: "url('https://api.iconify.design/mi/notification.svg') no-repeat center center / contain"
}}> </a>
                </div>
            </div>

            <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className="content">
                    <div className="left-section">
                        <h1 className='cardTitle'>Transfers</h1>
                    </div>
                    <div className="right-section">
                        <a href="http://localhost:5173/newTransfer" className="button_violet">Create</a>
                    </div>
                </div>
            </div>


            <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <div>
            <label htmlFor="user">User:</label>
            <input
              type="text"
              id="user"
              value={user}
              onChange={handleUserChange}
              required
            />
          </div>
          <button type="submit" className="button_send">
            Enviar
            <span className="send-icon" />
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
}

export default TransferMenu;