import { Link } from 'react-router-dom';
import React from 'react'
import { Box, TextField, Button
 } from '@mui/material'
import { BoxCentre, BoxHeaderColouredText, BoxHeaderText, ButtomHeaderText, MainContainer } from '../module/Style';
import { primaryColor } from '../module/theme';
import NextButton, { Goback, InputArea } from '../module/Component';
const login = () => {
  const nextNevto = "/contact"
  const gobackNevto = "/"

  return (
    <MainContainer>
         
          <BoxHeaderText sx={{
            fontWeight: 500
          }}>
            Please enter<BoxHeaderColouredText> Name </BoxHeaderColouredText>
          </BoxHeaderText>
          <Box sx={{
            height: {
              xs: 100,
              sm: 100,
              md: 100,
              lg: 100,
              xl: 100
            }
          }}></Box>
            <InputArea label={"First Name"} />
            <div style={{height: "10px"}} />
            <InputArea label={"Last Name"} />
            <NextButton nextNevto={nextNevto} />
            <ButtomHeaderText sx={{fontWeight: 400}}>
            Want to change language?<Goback gobackNevto={gobackNevto} /> 
          </ButtomHeaderText>
            
      </MainContainer>
  )
}

export default login
