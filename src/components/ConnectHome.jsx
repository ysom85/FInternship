import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { FullScreenContainer } from '../module/Style'
import router from '../images/router.jpg'
const ConnectHome = () => {
  return (
    <FullScreenContainer>
    <Box ml={5}>
        <Box style={{float: 'left'}}>
        <Typography sx={{fontSize: "16px", fontWeight: 500, font: "Poppins"}}>12 day free</Typography>
        <Typography width={500} sx={{fontSize: "50px", fontWeight: 700, font: "Poppins"}}>Ready to launch your app in one the,</Typography>
        <Typography sx={{fontSize: "50px", fontWeight: 1000, font: "Poppins"}}>Application</Typography>
        <Typography  sx={{fontSize: "20px", fontWeight: 100, font: "Poppins"}}>Find the best application in the appie.</Typography>
        <Button variant="contained" style={{backgroundColor: "#78BE20"}}>Buy Now</Button>
        </Box>
        <Box width={100}  style={{float: 'right'}}>
        <img  src={router} alt='router image' />
        </Box>
        <Typography style={{color: "#78BE20", opacity: 0.21}} sx={{fontSize: "96px", fontWeight: 700, font: "Roboto Serif"}}>CONNECT</Typography>
    </Box> 
    </FullScreenContainer>
    
  )
}

export default ConnectHome
