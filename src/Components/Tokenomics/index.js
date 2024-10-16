import React from 'react';
import './index.css';
import Donut from '../../assets/Donut.png'

const Tokenomics = () => {
  return (
    <div className='one-two-card'>
      <h1 className='header text-center text-white'>Tokenomics</h1>
      <div className='items'>
      <img src={Donut} alt='graph' className='imageDonut'/>

    <div className='ttl-container'>
  <div className='one-card-container'>
    <ul>
      <li className="list-item">
        <span className="label">Name:</span>
        <span className="value">EthAi</span>
      </li>
      <li className="list-item">
        <span className="label">Token Name:</span>
        <span className="value">$EthAi</span>
      </li>
      <li className="list-item">
        <span className="label">Token Standard:</span>
        <span className="value">ERC20</span>
      </li>
      <li className="list-item">
        <span className="label">Blockchain:</span>
        <span className="value">Ethereum</span>
      </li>
      <li className="list-item">
        <span className="label">Total Supply:</span>
        <span className="value">100 Million</span>
      </li>
      <li className="list-item">
        <span className="label">Tax:</span>
        <span className="value">5%/5%</span>
      </li>
    </ul>
  </div>

  <div className='one-card-container'>
    <ul>
      <li className="list-item">
        <span className="label">Team:</span>
        <span className="value">35%</span>
      </li>
      <li className="list-item">
        <span className="label">Marketing:</span>
        <span className="value">5%</span>
      </li>
      <li className="list-item">
        <span className="label">Liquidity Pool:</span>
        <span className="value">90%</span>
      </li>
    </ul>
  </div>
    </div>
      </div>

     
    </div>
  );
}

export default Tokenomics;