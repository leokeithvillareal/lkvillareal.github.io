import { Box, Grid } from '@mui/material'
import React from 'react'

export const Skills = () => {
    return (
        <div>
            <Box display="flex" justifyContent="center" width="100%">
                <Box fontSize="32px">SKILLS</Box>
            </Box>
            <Grid container spacing={2} justifyContent="space-around" width="100%" p={3}>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo1'>
                            <Box><i className='bx bxl-html5'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo2'>
                            <Box><i className='bx bxl-css3'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo3'>
                            <Box><i className='bx bxl-javascript'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo4'>
                            <Box><i className='bx bxl-react'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo5'>
                            <Box><i className='bx bxl-php'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo6'>
                            <Box><i className='bx bxl-aws'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo7'>
                            <Box><i className='bx bxl-python'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo8'>
                            <Box><i className='bx bxl-git'></i></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box className='skills-logo'>
                        <Box className='logo9'>
                            <Box><i className='bx bxl-postgresql'></i></Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}