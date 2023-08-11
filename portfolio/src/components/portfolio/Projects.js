import React from "react";
import "../../assets/css/card.css";
import { Box, Grid } from "@mui/material";
import admin from '../../assets/image/admin.png'
import acad from '../../assets/image/acad.png'
import biz from '../../assets/image/biz.png'
import bookretail from '../../assets/image/bookretail.png'
import FDE from '../../assets/image/FDE.png'

export const Projects = () => {
  return (
    <Box m={3} p={3}>
        <Box component="h2" color="#fff" className='heading'>My <span>Projects</span></Box>
        <Grid container spacing={3} justifyContent="center">
            {itemData.map((item, index) => (
                <Grid key={index} item xs={12} md={6} lg={4}>
                    <Box className='portfolio-container'>
                        <Box className='portfolio-box'>
                            <img src={item.img} alt='img' className="image" />
                            <Box className='portfolio-layer'>
                                {index === 3 || index === 4 ? ( 
                                    <Box component="h4" color={item.color}>{item.title}</Box>
                                    ) : (
                                        <Box display="flex" >
                                            <h4>POF</h4><Box component="h4" color={item.color}>{item.title} {item.sub}</Box>
                                        </Box>
                                    )
                                }
                                <p>{item.description}</p>
                                <a href={item.link}><i className='bx bx-link-external'></i></a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
  );
};

const itemData = [
    {
      img: admin,
      description: 'POFAcademy Admin is a robust platform designed to facilitate seamless management of educational initiatives. With intuitive tools, it empowers administrators to oversee user registrations, monitor training course participation, and create new courses.',
      title: 'ACADEMY',
      sub:"ADMIN",
      color:'#256eff',
      link: 'https://admin-academy.pofsis.com'
    },
    {
      img: acad,
      description: 'A venue for upgraded training experience where growth-seekers can find updated training materials, growth-focused programs and a community for people to share the same interest.',
      title: 'ACADEMY',
      sub:"",
      color:'#256eff',
      link: 'https://academy.pofsis.com/'
    },
    {
      img: biz,
      description: 'POFBusiness is a platform for business growth and development. It is designed to help, enhance, monitor and manage a business for a more efficient, fraud-free, productive, and user-friendly in the most convenient yet effective way.',
      title: 'BUSINESS',
      sub:"",
      color:'#11743b',
      link: 'https://business-main.pofsis.com/'
    },
    {
      img: bookretail,
      description: 'A versatile platform is designed to streamline retail operations with advanced capabilities. Retail Form empowers businesses to effortlessly handle key processes such as receiving, transferring, remittance, cash collection, and detailed reporting.',
      title: 'RETAIL FORM',
      sub:"",
      color:'#c72c41',
      link: 'https://books-retail.pofsis.com/'
    },
    {
      img: FDE,
      description: 'This platform, called Forte Detection Exam, is a psychological assessment designed to help you identify your talents, build them into strengths, and enjoy consistent, nearly perfect performance.',
      title: 'FDE',
      sub:"",
      color:'#fff',
      link: 'https://psycfde.pofsys.com/'
    },
	
  ];