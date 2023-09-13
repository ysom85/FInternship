import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'
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
    <Box display={'inline'}><Link to ={props.gobackNevto}><ButtomHeaderColouredText>Go Back</ButtomHeaderColouredText></Link></Box>
  )
}
export const InputArea = (props)=>{
  return(
    <div>
      <input style={{height:"56px", width:"80vw", borderRadius: "16px", marginLeft:"10vw", marginRight:"10vw", backgroundColor: `${secondaryColor}`}} placeholder= {props.label}/>
    </div>
  )
}
export default NextButton;
