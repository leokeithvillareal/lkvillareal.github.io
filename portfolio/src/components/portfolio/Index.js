import React from 'react'
import { Skills } from './Skills'
import { Projects } from './Projects'

export const Portfolio = () => {
    return (
        <div style={{display:'flex', flexDirection: 'column', justifiyContent:'center', alignItems:'center', minHeight: '100vh'}} id="portfolio" >
            <Projects imgSrc="https://picsum.photos/id/201/300/200" imgAlt="Card Image 1"  title="Card Title" description="This is the card description section. You can add more details about the product here"/>
            <Skills />
        </div>
    )
}