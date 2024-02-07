import React from 'react'
import "../Css/about.css"
import leo from '../assets/leo.jpg';
import CloseIcon from '@mui/icons-material/Close';
const About = () => {
  return (
    <div>
    <div className='top1'>
    <div className='leoo'>
    <img src={leo} alt="Leo" width="120" height="120"/>
    </div>
        <p className='con1'>ABOUT</p>
        <CloseIcon className='ion1'style={{fontSize:"40px"}}/>
        </div>
        <div className='aboutmid'>
        <div className='abouttxt'><p className='ahead'>About Us</p><p className='abtcon' style={{}}>At Waah! jobs,
         we believe in connecting talent with opportunity. Our platform is more than just a job search engine;
          it's a dynamic space where career aspirations meet their match. Whether you're a seasoned professional 
          or just starting your journey,
         we are here to empower you to reach new heights in your career.</p>
        <div className='aboutbot'> <button className='abtbut'>LEARN MORE</button></div></div>
            <div className='nullclr'></div>
        </div>
</div>
  )
}

export default About