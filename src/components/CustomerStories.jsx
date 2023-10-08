import React from 'react'
import ScrollCarousel from 'scroll-carousel-react';
import { Carousel } from 'react-responsive-carousel';
import { FullScreenContainer } from '../module/Style'
import { Box, Typography } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { About } from '../module/Component';
const crouselComponent = [<About />, <About />, <About />];
const CustomerStories = () => {
  return (
    <FullScreenContainer>
      <Box padding={"5px"} height={"200px"} >
        
        <Box width={"100vw"}  style={{display: "grid", gridTemplateColumns: "5fr 0.3fr 0.3fr  2fr"}}>
        <Typography sx={{fontWeight: 700}}  style={{color: "#78BE20", fontFamily: "Roboto Serif"}}>Customer Stories</Typography>
          <ArrowCircleUpIcon style={{color: "#78BE20",   rotate: "270deg"}} />
          <ArrowCircleUpIcon style={{color: "#78BE20", rotate: "90deg"}} />
        </Box>
       <ScrollCarousel 
       autoplay autoplaySpeed={8} speed={7} 
       >
        {crouselComponent.map((item)=>(<div>{item}</div>))}
       </ScrollCarousel>
            
            
      {/* <Box style={{display: 'flex'}}>
      <About />
      <About />
      <About />
      <About />
      </Box>      */}
      </Box>
     
      
    </FullScreenContainer>
  )
}

export default CustomerStories
