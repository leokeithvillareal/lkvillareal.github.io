import React from 'react'
import logo2 from '../../assets/image/lk.png';

export const About = () => {
  return (
    <div style={{display:'flex', justifiyContent:'center', alignItems:'center', gap:'2rem',  minHeight: '100vh', backgroundColor:'#323946', padding: '6rem 9% 6rem'}} id="about">
        <div className='about-content'>
            <h2 className='heading'>About <span>Me</span></h2>
            <h3>Frontend Developer</h3>
            <p>I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Fronte  nd. I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.
                    Creative and efficient web application developer with 4+ years’ experience working on both front-end and back-end web development.</p>
        </div> 
        <div className='about-img'>
            <img src={logo2} alt='img' />
        </div>
    </div>
  )
}