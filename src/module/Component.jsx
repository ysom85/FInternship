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
    <div>
      <TextField variant='filled' className='setinputplacehoder' InputProps={{disableUnderline: true, style: {borderRadius: "15px", height: "70px"}}} sx={{
    width: {
        xs: 100,
        sm: 200,
        md: 300,
        lg: 400,
        xl: 500
    }
    }}   style={{ height:"56px", width:"80vw", borderRadius: "16px", marginLeft:"10vw", marginRight:"10vw", backgroundColor: `${secondaryColor}`}} placeholder= {props.label}  />
    </div>
  )
}
export default NextButton;
