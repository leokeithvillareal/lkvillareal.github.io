import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import '../css/Home.css'

import myPics from "../images/pics/my.png";

const Home = () => {

    return (
        <>
            <div className='container'>
                <div className="container_content">
                    <div className="container_content_inner">
                        <div className="title">
                            <Typography variant="h3" color="initial">Hello, I'm LK</Typography>
                        </div>
                        <div className="par">
                            <Typography variant="h6" className="p">I am Designer / Front End Developer</Typography>
                        </div>
                    </div>
                </div>
                <div className="container_outer_img">
                    <div className="img-inner">
                        <img src={myPics} className="container_img" />
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    )
}
export default Home;