import './app.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { Box, TextField, Button, Typography, 
 } from '@mui/material'
 
 import NextButton, {Goback, InputArea } from '../module/Component';
import {ButtomHeaderText, BoxCentre, BoxHeaderColouredText, BoxHeaderText, MainContainer, PutCentreItem, InputLabel, FullScreenContainer } from '../module/Style';
const Contact = () => {
  const nextNevto = "/otpvarify"
  const gobackNevto = "/login"
  return (
    <FullScreenContainer>
      <Box  sx={{
        height: {
          xs: "20.3%",
          sm: "10%",
          md: "10%",
          lg: "10%",
          xl: "10%"
        }
      }} />
      <MainContainer>
         
         <BoxHeaderText sx={{
          fontWeight: 500
         }}>
      Hello<BoxHeaderColouredText style={{display: 'block'}}> Darshan Dodal, </BoxHeaderColouredText>
    </BoxHeaderText>
    <Box sx={{
            height: {
              xs: "5vh",
              sm: "5vh",
              md: "5vh",
              lg: "5vh",
              xl: "5vh"
            }
          }}></Box>
     < InputLabel sx={{fontWeight:500}} style={{textAlign: 'center', display: 'grid'}}>Please Enter your phone number.</InputLabel>
     <Box sx={{
            height: {
              xs: "7vh",
              sm: "7vh",
              md: "7vh",
              lg: "7vh",
              xl: "7vh"
            }
          }}></Box>
      <InputArea  />
      
       
      <NextButton nextNevto={nextNevto} />
            <ButtomHeaderText sx={{fontWeight: 400}}>
            Want to change language?<Goback gobackNevto={gobackNevto} /> 
          </ButtomHeaderText>
      
</MainContainer>
    </FullScreenContainer>
    
  )
}

export default Contact
