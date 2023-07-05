import React, { useEffect, useState } from 'react';
import './css/settings.css';
import ImageDefault from './img/defaultImage.jpg'

const Settings = () => {

    //example use fetch to import data another application
    useEffect(() => {
        fetch('http://localhost:8081/users')
            .then(res => res.json())
            .then(data => console.log({data}))
    }, [])



    return (
        <div className='Page'>
    
            <div className="area"></div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="http://localhost:5173/perfil">
                            <i id='imageUser'>
                                <img src={ImageDefault} alt="User" style={{ height: "60px", width: "auto" }} />
                            </i>
                            <span className="nav-text">
                                User name
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:5173/">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Home
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-globe fa-2x"></i>
                            <span className="nav-text">
                                My account
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-comments fa-2x"></i>
                            <span className="nav-text">
                                Bank Accounts
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-camera-retro fa-2x"></i>
                            <span className="nav-text">
                                Notifications
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-film fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
           
            <div class="header">
                <h1>Header</h1>
               
            </div>
        </div>
    );
}

export default Settings;

