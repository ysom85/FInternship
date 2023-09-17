import '../App.css'
import React from 'react'
import { primaryColor } from '../module/theme';
import { Link } from 'react-router-dom'
import {TextField, Button, Box } from '@mui/material'
import { ButtomHeaderColouredText, NextButtonStyle, PutCentreItem } from './Style'
import { secondaryColor } from './theme'
export const NextButton = (props) => {
  return (
    <PutCentreItem>
      <Link to = {props.nextNevto}><NextButtonStyle sx={{fontWeight: 700}}>Next</NextButtonStyle></Link>
    </PutCentreItem>
  )
} 
 
export const Goback = (props)=>{
  return(
    <Box display={'inline'} ><Link to ={props.gobackNevto} style={{textDecoration: 'none', borderBottom: `2px solid ${primaryColor}`}}><ButtomHeaderColouredText sx={{fontWeight: "1000px"}}>Go Back</ButtomHeaderColouredText></Link></Box>
  )
}
export const InputArea = (props)=>{
  return(
    <div style= {{display: 'flex', textAlign: 'center'}}>
      <TextField variant='filled' className='setinputplacehoder' InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}} sx={{
    width: {
        xs: 300,
        sm: 300,
        md: 300,
        lg: 300,
        xl: 300
    }
    }}   style={{ height:"56px", borderRadius: "16px", margin: 'auto', backgroundColor: `${secondaryColor}`}} placeholder= {props.label}  />
    </div>
  )
}
export default NextButton;
