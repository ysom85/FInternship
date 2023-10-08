import React from 'react'
import { Box, styled, Button, TextField, Typography} from "@mui/material";
import { primaryColor, secondaryColor } from './theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export const FullScreenContainer = styled(Box)({
  height: "28.9vh",
  width: "50vw"
})
export const MainContainer = styled(Box)({
   
    overflowX: "hidden"
    
})
export const BoxHeaderText = styled(Box)({
    fontFamily: "Exo 2",
    fontWeight: "700px",
    fontSize: "24px",
    textAlign: "center",
    typography: 'subtitle2',
    
})
export const BoxHeaderColouredText = styled(Box)({
  color: `${primaryColor}`,
  fontWeight: 500,
  display: 'inline'
})
export const BoxCentre = styled(Box)({
    marginLeft: "10vw",
    marginRight: "10vw",
  
})

export const NextButtonStyle=styled(Button)({
  width: "138px",
  height: "39.89px",
  fontWeight: "1000px",
  fontFamily: "Exo 2",
  color: `${primaryColor}`,
  outlineColor: `${primaryColor}`,
  border: "1.5px solid",
  borderColor: `${primaryColor}`,
  variant: "outlined",
  marginTop: "50px",
  
})
export const ButtomHeaderText = styled(Typography)({
  fontFamily: "Exo 2",
  fontWeight: "400px",
  fontSize: "18px",
  textAlign: "center",
  marginTop: "15px" 
})
export const ButtomHeaderColouredText = styled(Box)({
  fontWeight: "700px",
  fontFamily :"Exo 2",
  fontSize : "18px",
  display: 'inline',
  color: `${primaryColor}`,
  marginBottom: '-15px'               
})
export const PutCentreItem=styled(Box)({
  textAlign: 'center',
  display: "grid"
})
export const InputLabel = styled(Typography)({
  fontSize: "15px",
  fontFamily: "Exo 2",  
  fontWeight: "500px",
  color: "#000000",
  marginBottom: "20px",
  fontWeight:400,
  width: "75vw",
  textAlign: 'center',
  margin: 'auto'

})
 
 

 