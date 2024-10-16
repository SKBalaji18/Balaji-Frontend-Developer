import React from 'react';
import './index.css';  // Assuming you're adding styles here.

import FutureTechnology from '../../assets/Future Technology.png'
import graph from '../../assets/graph.png'
import Tools from '../../assets/Tools.png'
import saving from '../../assets/saving.png'

const AboutUs = () => {
  return (
    <div className='about-container'>
    <div className='center-container'>
      <h1 className='text-white white'>About EthAi</h1>
      <h5 className='text'>
        At EthAi, we're all about making crypto trading easier and more intuitive.
        We provide tools that help traders keep up with all new market trends and
        track top traders' movements.
      </h5>
      <button className='whiteButton'>Read More</button>
    </div>

      <div className='container-c'>
        <div className='column'>
          <div className='card'>
            <img src={graph} alt='stay' className='icon'/>
            <h2 className='header'>Stay Ahead</h2>
            <h5 className='text'>No more guesswork—get clear, trustable insights.</h5>
          </div>
          <div className='card'>
            <img src={saving} alt='assets' className='icon'/>
            <h2 className='header'>Know Your Assets</h2>
            <h5 className='text'>Always stay on top of how your investments are performing.</h5>
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <img src={Tools} alt='vector' className='icon'/>
            <h2 className='header'>Simple, Not Overwhelming</h2>
            <h5 className='text'>Our tools are designed to make complex market analysis easy to understand and act on.</h5>
          </div>
          <div className='card'>
            <img src={FutureTechnology} alt='future' className='icon'/>
            <h2 className='header'>Future-Proof</h2>
            <h5 className='text'>We're constantly improving, adding new features to help you make the most informed decisions possible.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;