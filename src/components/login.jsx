import { Link } from 'react-router-dom';
import React from 'react'
import { Box, TextField, Button
 } from '@mui/material'
import { BoxCentre, BoxHeaderColouredText, BoxHeaderText, ButtomHeaderText, FullScreenContainer, MainContainer } from '../module/Style';
import { primaryColor } from '../module/theme';
import NextButton, { Goback, InputArea } from '../module/Component';
const login = () => {
  const nextNevto = "/contact"
  const gobackNevto = "/"

  return (
    <FullScreenContainer>
      <Box  sx={{
        height: {
          xs: "23.4%",
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
            Please enter<BoxHeaderColouredText> Name </BoxHeaderColouredText>
          </BoxHeaderText>
          <Box height={"10vh"} />
          <BoxCentre>
            <InputArea style={{paddingTop: "0px", paddingBottom:"0px"}}  label={"First Name"} />
            <div style={{height: "10px"}} />
            <InputArea label={"Last Name"} />
          </BoxCentre>
            
            <NextButton nextNevto={nextNevto} />
            <ButtomHeaderText sx={{fontWeight: 450}}>
            Want to change language?<Goback gobackNevto={gobackNevto} /> 
          </ButtomHeaderText>
            
      </MainContainer>
    </FullScreenContainer>
    
  )
}

export default login
