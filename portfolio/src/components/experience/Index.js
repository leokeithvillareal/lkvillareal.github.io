import { Box } from '@mui/material'
import React from 'react'

export const Experience = () => {
    return (
        <section className="content-card experience" id="experience">
            <h1 className='heading'>Experience</h1>
            <Box className="timeline">
                <Box className="timeline-items">
                    <Box className="timeline-item">
                        <Box className="timeline-date">September 2021 - now</Box>
                        <Box className="timeline-content">
                            <Box component="h2" className='timeline-exp'>Lead Web Developer</Box>
                            <Box component="h3" className='timeline-comp' >I4One Inc.</Box>
                            <Box className='timeline-desc' px={3}>
                                <ul>
                                    <li>Responsible for conducting code reviews to ensure quality and adherence to standards.</li>
                                    <li>Responsible for fixing bugs and testing for usability.</li>
                                    <li>Responsible for managing subordinates and their handled projects and maintaining deployed projects. Collaborated with business process analyst, designers, QC, and database.</li>
                                    <li>Led the migration of a database using Python within AWS Lambda.</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="timeline-item">
                        <Box className="timeline-date">July 2019 - September 2021</Box>
                        <Box className="timeline-content">
                            <Box component="h2" className='timeline-exp'>Web Developer</Box>
                            <Box component="h3" className='timeline-comp' >I4One Inc.</Box>
                            <Box className='timeline-desc' px={3}>
                                <ul>
                                    <li>Developed and maintained responsive web applications using HTML, JavaScript, CSS, PHP, the Laravel framework, and ReactJS.</li>
                                    <li>Received training in ReactJS and Python to become a full-stack developer proficient in both frontend and backend technologies.</li>
                                    <li>Led the migration of a project from the Laravel framework to ReactJS, resulting in an enhanced UI/UX design.</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="timeline-item">
                        <Box className="timeline-date">November 2018 - March 2019</Box>
                        <Box className="timeline-content">
                            <Box component="h2" className='timeline-exp'>Graphic Design</Box>
                            <Box component="h3" className='timeline-comp' >AXEIA DEVELOPMENT CORPORATION</Box>
                            <Box className='timeline-desc' px={3}>
                                <ul>
                                    <li>Practicum (500 hrs), Creative Department.</li>
                                    <li>Proficiently edited images using Adobe Photoshop as part of my practical experience.</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}
