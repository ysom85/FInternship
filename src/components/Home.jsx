import * as React from 'react';
 
import { Box, MenuItem, MenuList, Typography} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
 
import {FullScreenContainer, BoxCentre, BoxHeaderColouredText, BoxHeaderText, MainContainer} from '../module/Style';
import {secondaryColor } from '../module/theme';
import NextButton from '../module/Component';
const Home = () => {
    const nextNevto = "/login"
     
    // onClick={ (e)=>console.log(e.target.getAttribute('value'))
  // e.target.getAttribute('value');
    return (
    <FullScreenContainer>
      <Box  sx={{
        height: {
          xs: "20.6%",
          sm: "10%",
          md: "10%",
          lg: "10%",
          xl: "10%"
        }
      }} />
      <MainContainer sx={{
        height: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%"
        }
      }} >
           
          <BoxHeaderText height={"11.26%"} width={"76.27%"} style={{margin: "auto"}} sx={{ fontWeight: 500 }} >
            Please select<BoxHeaderColouredText> Language </BoxHeaderColouredText>
          </BoxHeaderText>
          <Box height={"5.5%"} /> 
            <BoxCentre sx={{ width:{
                       xs: 338,
                       sm: 338,
                       md: 338,
                       lg: 338,
                       xl: 338
                    }, height:{
                      xs: "18%",
                      sm: "18%",
                      md: "18%",
                      lg: "18%",
                      xl: "18%"
                    }, margin: 'auto'}} borderRadius={5} >
                <MenuList style={{paddingTop: "0px", paddingBottom:"0px", background: `${secondaryColor}`, borderRadius: "20px" }}>
                    <MenuItem  style={{paddingTop: "0px", paddingBottom:"0px", height: "6%",textAlign: 'center', borderBottom: "1px solid black", display: 'grid', gridTemplateColumns: "9fr 1fr" }} onClick={(e)=>document.getElementById("english").style.display ='block'}  >
                        <Typography value="english" style={{fontWeight: 700}} >English</Typography>
                        <CheckCircleIcon id="english"  style={{display: 'none', color: "#44AC5C"}} />
                    </MenuItem>
                    <MenuItem style={{paddingTop: "0px", paddingBottom:"0px", height: "6%", textAlign: 'center', borderBottom: "1px solid black", display: 'grid', gridTemplateColumns: "9fr 1fr"}} onClick={(e)=>document.getElementById("hindi").style.display ='block'}>
                        <Typography style={{fontWeight: 700}} >Hindi</Typography>
                        <CheckCircleIcon id="hindi" style={{display: 'none', color: "#44AC5C"}} />
                    </MenuItem>
                    <MenuItem style={{paddingTop: "0px", paddingBottom:"0px", height: "6%", textAlign: 'center', display: 'grid', gridTemplateColumns: "9fr 1fr"}} onClick={(e)=>document.getElementById("marathi").style.display ='block'}>
                        <Typography style={{fontWeight: 700}}> Marathi</Typography>
                        <CheckCircleIcon id="marathi" style={{display: 'none', color: "#44AC5C"}}/>
                    </MenuItem>
                </MenuList>
            </BoxCentre>
            
            <NextButton nextNevto={nextNevto} />
            
      </ MainContainer>
    </FullScreenContainer>  
      
    );
}

export default Home
