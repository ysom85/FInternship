import './App.css'
import React from 'react'
import { primaryColor } from '../module/theme';
import { Link } from 'react-router-dom'
import {TextField, Box } from '@mui/material'
import { ButtomHeaderColouredText, NextButtonStyle, PutCentreItem } from './Style'
import { secondaryColor } from './theme'
import '../App.css'
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
    <div style= {{paddingTop: "0px", paddingBottom:"0px", display: 'flex', textAlign: 'center'}}>
      <TextField height={"56px"} className="setPlaceholder" variant='filled'   InputProps={{ paddingTop: "0px", paddingBottom:"0px", disableUnderline: true, style: { borderRadius: "15px", }}} sx={{
    width: {
        xs: 300,
        sm: 300,
        md: 300,
        lg: 300,
        xl: 300
    }
    }}   style={{ paddingTop: "0px", paddingBottom:"0px",  borderRadius: "16px", margin: 'auto', backgroundColor: `${secondaryColor}`}} placeholder= {props.label}  />
    </div>
  )
}
export default NextButton;
