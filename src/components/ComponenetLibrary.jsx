import React from 'react'
import drone from '../images/drone.jpg'
import { Box, Typography } from '@mui/material'
import { GifBoxRounded } from '@mui/icons-material'
const ComponenetLibrary = () => {
  return (
    <div>
      <Box mt={5} ml={5} style={{display: 'flex'}}>
        <div><img height={290} width={278} src={drone} alt="drone imag" /></div>
        <Box width={200} padding={1}> 
            <Typography style={{ fontStyle: "italic", fontSize: "20px" }}>10 tips for increasing creativity</Typography>
            <Typography style={{fontSize: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere</Typography>
            <Typography style={{fontSize: "10px"}}>Read more...</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default ComponenetLibrary
