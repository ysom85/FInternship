import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import logo from '../images/logo2.jpg'
import fblogo from '../images/fblogo.jpg'
import twitterlogo from '../images/twitterlogo.jpg'
import instalogo from '../images/instalogo.jpg'
import map from '../images/map.jpg'
import { FullScreenContainer } from '../module/Style'
const contactForm = () => {
  return (
    <FullScreenContainer style={{paddingTop: "15px", backgroundColor: "lightblack"}}>
        <Box width={"100vw"}>
        <Box mt={"20px"} ml={"145px"} height={"496px"} width={"568px"} style={{float: "left", backgoundColor: "red"}}>
            <img src={logo} alt='logo' />
            <Box height={"23px"} />
            <Typography style={{fontSize: "15px", font: "Poppins", fontWeight: 300}}>Near Gunvantrao Deshmukh School, Bits&Volts pvt. ltl.</Typography> 
            <Typography style={{fontSize: "15px", font: "Poppins", fontWeight: 300}}>Pusad, Yavatmal, Maharashtra -445204</ Typography >
            <Box height={"35px"} />
<Typography style={{fontSize: "15px", font: "Poppins", fontWeight: 300, color: "#8E989F"}}>
support@bitandvolts.co.in</Typography>
<Typography style={{fontSize: "15px", font: "Poppins", fontWeight: 300, color: "#8E989F"}}>9873 342 234 </Typography>
        <Box height={"10px"} />
        <Box style={{display: "flex"}}>
        <img  src={fblogo} alt='fblogo' />
        <img style={{marginLeft: "17px"}} src={twitterlogo} alt='twitterlogo' />
        <img style={{marginLeft: "17px"}} src={instalogo} alt='instalogo' />
        
        </Box>
        <Box height={"20px"} />
        <img height={"245px"} width={"565px"} src={map} alt='mapIMG' />
        </Box>
        <Box height={500} width={"500px"} style={{float: "right", backgoundColor: "green"}}>
            <Box>
            <Typography sx={{fontWeight: 600, fontSize: 30}} style={{ font: "Poppins" }}>Get In Touch</Typography>
            </Box>
            <Box style={{display: "flex"}}>
            <TextField style={{height: "28px", width: "200px"}} id="outlined-basic" label="First Name" variant="outlined" />
            <Box width={20} height={"28px"}></Box>
            <TextField style={{height: "28px", width: "200px"}} id="outlined-basic" label="Email" variant="outlined" />
            </Box>
            <Box mt={"50px"}>
            <TextField mt={"20px"} style={{borderRadius: "100px", height: "28px", width: "420px"}} id="outlined-basic" label="Subject" variant="outlined" />         
            </Box>
            <Box mt={"60px"}>
            <TextField mt={"20px"} inputProps={{sx:{height: "150px", borderLeftTopRadius: "100px"}}}  style={{height: "200px", width: "420px", borderTopLeftRadius: "80px"}} id="outlined-basic" label="Messsage" variant="outlined" />   
            </Box>
            <Button variant="contained" style={{backgroundColor: "#78BE20"}}>Send Message</Button>
            
            
            
        </Box>
    </Box>
    </FullScreenContainer>
    
  )
}

export default contactForm
