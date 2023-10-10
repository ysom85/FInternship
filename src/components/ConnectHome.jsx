import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { FullScreenContainer } from '../module/Style'
import router from '../images/device_image.jpg'
const ConnectHome = () => {
  return (
    <FullScreenContainer>
    <Box width={"90vw"} pt={10} pl={11} height={445}  margin={"auto"}>
        <Box  width={500} height={445} style={{float: 'left' }}>
        <Typography sx={{fontSize: "16px", fontWeight: 500, font: "Poppins", color: "#37474F"}}>12 day free</Typography>
        <Typography sx={{fontSize: "50px", fontWeight: 700, font: "Poppins"}}>Ready to launch your app in one the,</Typography>
        <Typography sx={{fontSize: "50px", fontWeight: 1000, font: "Poppins"}}>Application</Typography>
        <Typography  sx={{fontSize: "20px", fontWeight: 100, font: "Poppins"}}>Find the best application in the appie.</Typography>
        <Box height={40} />
        <Button variant="contained" style={{backgroundColor: "#78BE20"}}>Buy Now</Button>
        <Typography style={{color: "#78BE20", opacity: 0.21}} sx={{fontSize: "96px", fontWeight: 700, font: "Roboto Serif"}}>CONNECT</Typography>
        </Box>
        <Box   height={445} width={379}  style={{float: 'right'}}>

        <img  src={router} alt='router image' />
        </Box>
       
    </Box> 
    </FullScreenContainer>
    
  )
}

export default ConnectHome
