import {Grid, Box, Typography } from '@mui/material'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { primaryColor } from '../module/theme';

const Motorpannel = () => {
  return (  
    <Box sx={{
        height:{
            xs: '50vh',
            sm: '50vh',
            md: '50vh',
            lg: '50vh',
            xl: '50vh'
        },
        width:{
            xs: '97vw',
            sm: '500px',
            md: '500px',
            lg: '50opx',
            xl: '500px'
        },
        }} margin={'auto'}>
        <Box ml={-1} height={'100%'} width={'103%'} style={{overflow: 'hidden'}}>
            <Box height={"50vh"} ml={'-10%'}  width={"120%"}  style={{ backgroundColor: "#69BD7D", borderBottomLeftRadius: "500px", borderBottomRightRadius: "500px"}}>
                <Box style={{display: "grid"}} >
                    <img style={{marginTop: "20px", marginLeft: "50px"}} src='c:\Users\DELL\Downloads\1672495210399.jpg' alt='hello'/>
                    {/* <ArrowBackIcon style={{ marginTop: "20px", marginLeft: "50px", color: "#ffffff", fontSize: "30px", fontWeight: "50px"}}/> */}
                    <Typography style={{marginTop:"-33px", marginLeft: "100x", textAlign: 'center', color: 'white', fontSize:"24px", fontWeight: "700px"}}>Test</Typography>
                    <MoreVertIcon style={{ marginTop: "-30px ", display: "inline", marginLeft: "85%", color: "#ffffff"}} />            
                </Box>
                <Box style={{width: '100%', display: 'grid', gridTemplateColumns: "8fr 4fr"}}>
                    <Box width={'200px'} style={{display: 'flex', textAlign: 'center' }}>
                        <Grid ml={"50px"} mt={3}  container spacing={2}>
                            <Grid xs={3} >
                                <Box  height={70} width={30}  style={{backgroundColor: "#EB5757", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></Box>   
                                <Typography marginLeft={'-30%'}>R</Typography>
                            </Grid>
                            <Grid xs={3} >
                                <Box height={70} width={30}  style={{backgroundColor: "#F2C94C", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></Box>   
                                <Typography marginLeft={'-30%'}>Y</Typography>
                            </Grid>
                            <Grid xs={3} >
                                <Box height={70} width={30}  style={{backgroundColor: "#1A73E9", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></Box>
                                <Typography marginLeft={'-30%'}>B</Typography>
                            </Grid>
                        </Grid> 
                    </Box>
                    <Box style={{display: 'flex',flat: 'right', textAlign: 'centre'}} >
                        <Box>
                            <CachedIcon style={{borderRadius: "10%",boxShadow: "0 2px 2px #f3f3f3", marginTop: "30px", padding: "7px",  height: "45px", width: "40px", color: "#44AC5C", background: "White"}}/>
                            <Typography marginLeft={'20%'}>Auto</Typography>
                        </Box>
                        <Box style={{marginLeft: "10px"}}>
                            <PowerSettingsNewIcon style={{borderRadius: "10%", boxShadow: "0 2px 2px #f3f3f3", marginTop: "30px",padding: "7px",  height: "45px", width: "40px", color: "#44AC5C", background: "White"}}/>
                            <Typography marginLeft={'20%'}>OFF</Typography>
                        </Box>
                    </Box>    
                </Box>            
                
                <Box>
                <img style={{marginLeft: "35%", marginTop: "0px"}} src="https://cdn-icons-png.flaticon.com/512/8898/8898031.png" width="138" height="129" marginTop="500px"  alt="Electric motor free icon" mt={-50} title="Electric motor free icon"  />
                
                <Typography style={{ color: "#ffffff" , marginLeft: "40%"}}> Motor OFF</Typography>
                <Typography style={{fontSize: "15px", marginLeft: "35%", color: "#707070"}}>Pump is off from 10Min</Typography>
                </Box>    
                
            </Box>    
        </Box>
        
        <Typography  sx={{fontWeight: 500, marginLeft: "10px"}}> Schedule</Typography>
         <Box>
         <Grid mt={1} ml={1} width={'95%'} container spacing={2} style={{backgroundColor: "#f3f3f3", borderRadius: "10px"}}>
             
             <Grid xs={3} padding={'10px'}>
             <Typography>OFF</Typography>
             </Grid>
             <Grid xs={3} padding={'10px'}>
             <Typography sx={{fontWeight: 500}}>12AM</Typography>
             </Grid>
             <Grid xs={4} padding={'10px'}>
             <Typography style={{color: '#828282'}}>Tommorow</Typography>
             </Grid >
             <Grid xs={2} padding={'10px'}>
             <FontAwesomeIcon icon={faTrashCan} style={{color: "#EB5757"}} />
             </Grid>
             
         
     </Grid>
     <Grid mt={1} ml={1} width={'95%'} container spacing={2} style={{backgroundColor: "#f3f3f3", borderRadius: "10px"}}>
             
                <Grid xs={3} padding={'10px'}>
                <Typography>OFF</Typography>
                </Grid>
                <Grid xs={3} padding={'10px'}>
                <Typography sx={{fontWeight: 500}}>12AM</Typography>
                </Grid>
                <Grid xs={4} padding={'10px'}>
                <Typography style={{color: '#828282'}}>Tommorow</Typography>
                </Grid >
                <Grid xs={2} padding={'10px'}>
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#EB5757"}} />
                </Grid>
                
            
        </Grid>
        <Grid mt={1} ml={1} width={'95%'} container spacing={2} style={{backgroundColor: "#f3f3f3", borderRadius: "10px"}}>
             
                <Grid xs={3} padding={'10px'}>
                <Typography>OFF</Typography>
                </Grid>
                <Grid xs={3} padding={'10px'}>
                <Typography sx={{fontWeight: 500}}>12AM</Typography>
                </Grid>
                <Grid xs={4} padding={'10px'}>
                <Typography style={{color: '#828282'}}>Tommorow</Typography>
                </Grid >
                <Grid xs={2} padding={'10px'}>
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#EB5757"}} />
                </Grid>
                
            
        </Grid>
         </Box>
        <Box style={{color:"#44AC5C", margin: 'auto',marginTop:"3vh"}}>
            <AddIcon style={{ display:'flex', justifyContent: "center", backgroundColor:`${primaryColor}`,margin: "auto",color:"white", borderRadius: '50%', height: "45px",width: "45px"}}/>                  
            <Typography style={{marginTop:"10px", display:'flex', justifyContent: "center"}}>
                Add Schedule
            </Typography>
        </Box>
        
        
    </Box>
    
  )
}

export default Motorpannel
