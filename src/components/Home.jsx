import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Box, Grid, MenuItem, MenuList, Typography,styled} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { red } from '@mui/material/colors';
import { BoxCentre, BoxHeaderColouredText, BoxHeaderText, MainContainer} from '../module/Style';
import { primaryColor, secondaryColor } from '../module/theme';
import NextButton from '../module/Component';
const Home = () => {
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    const nextNevto = "/login"
    const handleClose = () => {  
    //   setOpen(false);
    };
    // onClick={ (e)=>console.log(e.target.getAttribute('value'))
  // e.target.getAttribute('value');
    return (
      <MainContainer >
    
          <BoxHeaderText sx={{
            fontWeight: 500
          }} >
            Please select<BoxHeaderColouredText> Language </BoxHeaderColouredText>
          </BoxHeaderText>
            <BoxCentre borderRadius={5} style={{ background: `${secondaryColor}` }}>
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
