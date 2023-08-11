import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../../Variants"
import logo from '../../assets/image/pic2.png';
import pdf from '../../assets/file/LK-Villareal-Resume.pdf';

export const Home = () => {
    return (
        <section style={{display:'flex', justifiyContent:'center',aligItems:'center'}} id="home">
            <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='home-img'>
                <img src={logo} alt='img' />
            </motion.div>
            <div className='home-content'>
                <motion.h3 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>Hello, I am</motion.h3>
                <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>Leo Keith Villareal</motion.h1>
                <motion.h3 variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>And I'm a <span>Frontend Developer</span></motion.h3>
                <div className='social-media'>
                    <motion.a variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} href='https://www.facebook.com/lk.villareal/'><i className='bx bxl-facebook' ></i></motion.a>
                    <motion.a variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} href='https://www.instagram.com/imlcute/'><i className='bx bxl-instagram-alt' ></i></motion.a>
                    <motion.a variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} href='https://linkedin.com/in/leo-keith-villareal-340657209'><i className='bx bxl-linkedin' ></i></motion.a>
                </div>
                <motion.a href={pdf} variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='btn' download>Download CV</motion.a>
            </div> 
        </section>
    )
}

