import React from 'react'
import { Link } from 'react-router-dom';
import {InputLabel} from '../module/Style'
import NextButton, {Goback, InputArea } from '../module/Component';
import { Box, TextField, Button, Typography, Grid
 } from '@mui/material'
 import {ButtomHeaderText, BoxCentre, BoxHeaderColouredText, BoxHeaderText, MainContainer, PutCentreItem } from '../module/Style';
const OTPvarification = () => {
  const gobackNevto="/contact"
  return (
    <MainContainer>
         
         <BoxHeaderText sx={{
          fontWeight: 500
         }}>
      Hello<BoxHeaderColouredText style={{display: 'block'}}> Darshan Dodal, </BoxHeaderColouredText>
    </BoxHeaderText>
    <Box sx={{
            height: {
              xs: 25,
              sm: 25,
              md: 25,
              lg: 25,
              xl: 25
            }
          }}></Box>
     <InputLabel sx={{
      fontWeight: 450
     }} mb={10} style={{textAlign: 'center'}}>Please enter OTP, which is sent to your phone number.</ InputLabel>
     <Box sx={{
            height: {
              xs: 30,
              sm: 30,
              md: 30,
              lg: 30,
              xl: 30
            }
          }}></Box>
      <Grid container spacing={0} mb={11} ml={0} mr={0} style={{  textAlign: 'center',  }}>
        <Grid item xs={2}>
        <TextField InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}}  id="filled-basic" type="text"
        maxLength="1" variant="filled" style={{ borderRadius:'50%',  width: '90%', marginLeft: '10px'}} ml={10}/>
        </Grid>
        <Grid item xs={2}>
        <TextField InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}} id="filled-basic" type="text"
        maxLength="1" variant="filled" style={{width: '90%', marginLeft: '10px'}} ml={10}/>
        </Grid>
        <Grid item xs={2}>
        <TextField InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}} id="filled-basic" type="text"
        maxLength="1" variant="filled" style={{width: '90%', marginLeft: '10px'}} ml={10}/>    
        </Grid>
      <Grid item xs={2}>
      <TextField InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}} id="filled-basic" type="text"
        maxLength="1" variant="filled" style={{width: '90%', marginLeft: '10px'}} ml={10}/>
      </Grid>
      <Grid item xs={2}>
      <TextField  InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}} id="filled-basic" type="text"
        maxLength="1" variant="filled" style={{width: '90%', marginLeft: '10px'}} ml={10}/>  
      </Grid>
      <Grid item xs={2}>
      <TextField InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}} id="filled-basic" type="text"
        maxLength="1" variant="filled" style={{width: '90%', marginLeft: '10px'}} ml={10}/>  
      </Grid>
      
      
      
      
       
        {/* <input  maxLength={1} style={{width: '50px'}} />
        <input  maxLength={1} style={{width: '50px'}} />
        <input  maxLength={1} style={{width: '50px'}} />
        <input  maxLength={1} style={{width: '50px'}} />
        <input  maxLength={1} style={{width: '50px'}} />
        <input  maxLength={1} style={{width: '50px'}} /> */}
      </Grid>
      <Box mt={-8} mr={2} style={{float: 'right'}}><Link style={{color:"#44AC5C", fontWeight: 700 }}>Resend</Link></Box>
      
       
      <Box mt={-5} style={{textAlign: 'center', diaplay: 'grid'}}>
      <Link to = "/motorpannel"><Button style={{width: '125px', fontWeight: 700, backgroundColor: "#44AC5C", color: "#ffffff", outlineColor: "#44AC5C", border: "1px solid  #44AC5C"}} variant="contained">Done</Button></Link>
      
      </Box>
      <ButtomHeaderText sx={{fontWeight: 400}}>
            Want to change the Number?<Goback gobackNevto={gobackNevto} /> 
          </ButtomHeaderText>
      
</MainContainer>
  )
}

export default OTPvarification
