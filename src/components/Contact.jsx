import React from 'react'
import { Link } from 'react-router-dom';
import { Box, TextField, Button, Typography, 
 } from '@mui/material'
 
 import NextButton, {Goback, InputArea } from '../module/Component';
import {ButtomHeaderText, BoxCentre, BoxHeaderColouredText, BoxHeaderText, MainContainer, PutCentreItem, InputLabel } from '../module/Style';
const Contact = () => {
  const nextNevto = "/otpvarify"
  const gobackNevto = "/login"
  return (
    <MainContainer>
         
         <BoxHeaderText sx={{
          fontWeight: 500
         }}>
      Hello<BoxHeaderColouredText style={{display: 'block'}}> Darshan Dodal, </BoxHeaderColouredText>
    </BoxHeaderText>
     < InputLabel style={{textAlign: 'center', display: 'grid'}}>Please Enter your phone number.</InputLabel>
      <InputArea  />
      
       
      <NextButton nextNevto={nextNevto} />
            <ButtomHeaderText sx={{fontWeight: 400}}>
            Want to change language?<Goback gobackNevto={gobackNevto} /> 
          </ButtomHeaderText>
      
</MainContainer>
  )
}

export default Contact
