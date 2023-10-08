import React from 'react'
import './app.css'
import { Box, Typography } from '@mui/material'
import { FullScreenContainer } from '../module/Style'
import { Grid } from '@mui/material'
import twiter from '../images/twiter.png'
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import mylogo from '../images/seed.svg' 
const Temp = () => {
  return (
    <>
    <FullScreenContainer>
      <Box sx={{
        marginTop: {
          xs: "80%",
          sm: "80%",
          md: "80%",
          lg: "80%",
          xl: "80%"
        }
      }} />
      <Typography ml={2} sx={{fontWeight: 700, font: "roboto"}}>Footer</Typography>
      <Box ml={2} mb={3} fontStyle={{
        display: "flex",
        flexWrap: "nowrap",
        flexGrow: 1,
        width: "100vw",
        borderTop: "1px solid grey",
      }} />
      <Box>
        <Grid container spacing={0}  style={{height: "100px", width: "100vw",  margin: "auto"}}>
          <Grid item xs={3}ml={5}>
            <Box>
              <img height={"30px"} src={mylogo} alt='logo image'  />
            </Box>
            <Typography style={{fontSize: "8.44px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies</Typography>
          </Grid>
          <Grid item xs={4} padding={2} pt={0} >
            <Box sx={{fontWeight: "500px"}} mb={1}>
            <Typography sx={{fontWeight: 700}} style={{fontSize: "8.44px"}}>Services</Typography>
            </Box>
            
            <Typography style={{fontSize: "8.44px"}}mt={1}>
           Design & Development</Typography>
           <Typography style={{fontSize: "8.44px"}} mt={1}>Management & Marketing</Typography>
           <Typography style={{fontSize: "8.44px"}} mt={1}>Strategy & Research</Typography>
          </Grid>
          <Grid item xs={4} >
          <Box sx={{fontWeight: "500px"}} mb={1}>
            <Typography sx={{fontWeight: 700}} style={{fontSize: "8.44px"}}>Contact</Typography>
            </Box>
            
            <Typography style={{fontSize: "8.44px"}}mt={1}>
            ABC road. ABC city</Typography>
           <Typography style={{fontSize: "8.44px"}} mt={1}>Help; (123)123 123 / 456</Typography>
           <Typography style={{fontSize: "8.44px"}} mt={1}>Email: inbox@qwerty.com</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ float: 'right'}} ml={"90%"}>
        <Grid container spacing={2}>
          <Grid xs={4} pr={"1px"} >
          <img height={"10px"} src={fb} alt='twiter logo' />
          </Grid>
          <Grid xs={4} pl={"1px"} pr={"1px"} >
          <img height={"10px"} src={twiter} alt='twiter logo' />
          </Grid>
          <Grid xs={4} pl={"1px"} >
          <img height={"10px"} src={insta} alt='twiter logo' />
          </Grid>
        </Grid>
      </Box>
    </FullScreenContainer>
    
    </>
    
  )
}

export default Temp
