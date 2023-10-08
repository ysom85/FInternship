import './App.css'
import React from 'react'
import { primaryColor } from '../module/theme';
import { Link } from 'react-router-dom'
import {TextField, Box, Typography  } from '@mui/material'
import { ButtomHeaderColouredText, NextButtonStyle, PutCentreItem } from './Style'
import { secondaryColor } from './theme'
import '../App.css'
import farmer from '../images/farmer.jpg'
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
export const About = () => {
  return (
    <Box padding={5}>
        <div style={{display: "flex"}} mt={5}>
        <Box >
            <img height={"70px"} width={"70px"} style={{display: "flex", border: "3px solid #7DC25380", borderRadius: "50%"}} src={farmer} alt="profilepic" />
        </Box>
        <Box mt={2}>
            <Typography ml={2} sx={{fontSize: "10px", fontWeight: 700, }} style={{color: "#7DC253"}}>Darshan Dodal</Typography>
            <Typography ml={2} sx={{fontFamily: "Roboto"}} style={{color: "#808080"}}>Farmer</Typography>
        </Box>
      
    </div>
    <Box mt={2} width={"300px"}>
    <Typography sx={{fontSize: "10px"}}>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.</Typography>
    </Box>
    
    </Box>
    
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
