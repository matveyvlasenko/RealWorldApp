import React, { useEffect, useState } from 'react';
// import './css/settings.css';
import './css/transfers.css';
import ImageDefault from './img/defaultImage.jpg';

function TransferenciasPage() {
  const [transferencias, setTransferencias] = useState([]);
  const [selectedButton, setSelectedButton] = useState('all');
  const [filteredTransferencias, setFilteredTransferencias] = useState([]);

  useEffect(() => {
    // Fetch de las transferencias desde la API
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => {
        console.log({ data });
        if (data && data.transferencias) {
          setTransferencias(data.transferencias);
        }
      })
      .catch(error => {
        console.error('Error fetching transferencias:', error);
      });
  }, []);

  useEffect(() => {
    filterTransferencias();
  }, [selectedButton, transferencias]);

  const filterTransferencias = () => {
    if (selectedButton === 'all') {
      setFilteredTransferencias(transferencias);
    } else if (selectedButton === 'received') {
      const receivedTransferencias = transferencias.filter(transferencia => transferencia.cantidad > 0);
      setFilteredTransferencias(receivedTransferencias);
    } else if (selectedButton === 'sent') {
      const sentTransferencias = transferencias.filter(transferencia => transferencia.cantidad < 0);
      setFilteredTransferencias(sentTransferencias);
    }
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <div className="header">
        <h1>[$] Real World App</h1>
        <div>
          <a href="#" className="button_green">
            $ New
          </a>
          <a href="#" className="notification"></a>
        </div>
      </div>
      <div className="secondary-header">
        <div className="header-buttons">
          <a
            href="#"
            className={`header-button ${selectedButton === 'all' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('all')}
          >
            All Transfers
          </a>
          <a
            href="#"
            className={`header-button ${selectedButton === 'received' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('received')}
          >
            Received
          </a>
          <a
            href="#"
            className={`header-button ${selectedButton === 'sent' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('sent')}
          >
            Sent
          </a>
        </div>
      </div>
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
                        <a href="http://localhost:5173/transfers">
                            <i className="fa fab fa-bitcoin	 fa-2x"></i>
                            <span className="nav-text">
                                Bank Accounts
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="http://localhost:5173/TransferMenu">
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
      <div className="container">
        <div className="transferencias-list">
          {filteredTransferencias.map((transferencia, index) => (
            <div key={index} className="transferencia-item">
              <div className="transferencia-info">
                <div className="emisor">{transferencia.nombreBeneficiario}</div>
                <div className="receptor">has sent to {transferencia.nombreReceptor}</div>
              </div>
              <div className="transferencia-details">
                <div className="payment">Payment:</div>
                <div className="numero-transferencia">{transferencia.numeroTransferencia}</div>
                <div className="cantidad">
                  {transferencia.cantidad > 0 ? `$${transferencia.cantidad}` : `-$${Math.abs(transferencia.cantidad)}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransferenciasPage;
