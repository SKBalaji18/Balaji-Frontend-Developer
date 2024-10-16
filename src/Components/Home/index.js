import React from 'react'
import './index.css'
import Navbar from '../Navbar'
import backgroundImage from '../../assets/home_bg.png'

class Home extends React.Component{
    render(){
        return(<>
            <div className='mobile-view-home'>
            <Navbar />
                <div className='home-content'>
                    <h1 className='home-head'>When Innovation meets <span className='home-span'>Investment</span></h1>
                    <p className='home-desc'>Empowering Trading Through Advanced Technology</p>
                    <button className='home-btn'>Open dApp</button>
                </div>
            </div>
            <div className='web-view-home' style={{backgroundImage: `url(${backgroundImage})`,backgroundSize:'cover'}}>
            <Navbar />
                <div className='home-content'>
                    <h1 className='home-head'>When Innovation meets <span className='home-span'>Investment</span></h1>
                    <p className='home-desc'>Empowering Trading Through Advanced Technology</p>
                    <button className='home-btn'>Open dApp</button>
                </div>
            </div>
            </>
        )
    }
}

export default Home