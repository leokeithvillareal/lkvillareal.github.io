import { Box, Typography } from '@material-ui/core';
import React from 'react';
import '../css/Home.css'
import myPics from "../images/pics/me.png";

const Home = () => {

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
            <Box className='container'>
                <Box className="container_content">
                    <Box className="container_content_inner">
                        <Box className="title">
                            <Typography variant="h3" color="initial">Hello, I'm LK</Typography>
                        </Box>
                        <Box className="par">
                            <Typography variant="h6" className="p">I am Designer / Front End Developer</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="container_outer_img">
                    <Box className="img-inner">
                        <Box component="img" src={myPics} className="container_img" />
                    </Box>
                </Box>
            </Box>
            <Box className="overlay"></Box>
        </Box>
    )
}
export default Home;