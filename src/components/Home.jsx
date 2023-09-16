import * as React from 'react';
 
import { Box, MenuItem, MenuList, Typography} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
 
import { BoxCentre, BoxHeaderColouredText, BoxHeaderText, MainContainer} from '../module/Style';
import {secondaryColor } from '../module/theme';
import NextButton, { HeightMargin } from '../module/Component';
const Home = () => {
    const nextNevto = "/login"
     
    // onClick={ (e)=>console.log(e.target.getAttribute('value'))
  // e.target.getAttribute('value');
    return (
      <MainContainer >
           
          <BoxHeaderText sx={{
            fontWeight: 500
          }} >
            Please select<BoxHeaderColouredText> Language </BoxHeaderColouredText>
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
            <BoxCentre sx={{ width:{
                       xs: 300,
                       sm: 300,
                       md: 300,
                       lg: 300,
                       xl: 300
                    }, margin: 'auto'}} borderRadius={5} style={{ background: `${secondaryColor}` }}>
                <MenuList>
                    <MenuItem  style={{textAlign: 'center', borderBottom: "1px solid black", display: 'grid', gridTemplateColumns: "9fr 1fr" }} onClick={(e)=>document.getElementById("english").style.display ='block'}  >
                        <Typography value="english" style={{fontWeight: 700}} >English</Typography>
                        <CheckCircleIcon id="english"  style={{display: 'none', color: "#44AC5C"}} />
                    </MenuItem>
                    <MenuItem style={{textAlign: 'center', borderBottom: "1px solid black", display: 'grid', gridTemplateColumns: "9fr 1fr"}} onClick={(e)=>document.getElementById("hindi").style.display ='block'}>
                        <Typography style={{fontWeight: 700}} >Hindi</Typography>
                        <CheckCircleIcon id="hindi" style={{display: 'none', color: "#44AC5C"}} />
                    </MenuItem>
                    <MenuItem style={{textAlign: 'center', display: 'grid', gridTemplateColumns: "9fr 1fr"}} onClick={(e)=>document.getElementById("marathi").style.display ='block'}>
                        <Typography style={{fontWeight: 700}}> Marathi</Typography>
                        <CheckCircleIcon id="marathi" style={{display: 'none', color: "#44AC5C"}}/>
                    </MenuItem>
                </MenuList>
            </BoxCentre>
             
            <NextButton nextNevto={nextNevto} />
            
      </ MainContainer>
    );
}

export default Home
