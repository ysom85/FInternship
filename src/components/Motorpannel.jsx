import { Box, Table, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { primaryColor } from '../module/theme';
const Motorpannel = () => {
  return (
    <>
        <Box height={"50vh"} width={"120%"} margin={"auto"} style={{ backgroundColor: "#44AC5C", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%"}}>
            <Box style={{display: "grid"}} >
            <ArrowBackIcon style={{ marginTop: "10px", marginLeft: "43px", color: "#ffffff", fontSize: "40px", fontWeight: "50px"}}/>
            <Typography style={{marginTop:"-30px", marginLeft: "100x", textAlign: 'center', color: 'white', fontSize:"24px", fontWeight: "700px"}}>Test</Typography>
            <MoreVertIcon style={{ marginTop: "-30px ", display: "inline", marginLeft: "400px", color: "#ffffff"}} />            
            </Box>
        <Box style={{padding: "5px"}}>
        {/* <PowerSettingsNewIcon style={{borderRadius: "10%", marginTop: "80px", marginLeft: "300px", height: "50px", width: "50px", color: "#44AC5C", background: "White"}}/> */}
        <Box style={{display: 'flex', textAlign: 'center' }}>
            <Box style={{marginLeft: "300px"}}>
            <CachedIcon style={{borderRadius: "10%",boxShadow: "0 2px 2px #f3f3f3", marginTop: "30px",  height: "50px", width: "50px", color: "#44AC5C", background: "White"}}/>
            <Typography>Auto</Typography>
            </Box>
            <Box style={{marginLeft: "10px"}}>
            <PowerSettingsNewIcon style={{borderRadius: "10%", boxShadow: "0 2px 2px #f3f3f3", marginTop: "30px",  height: "50px", width: "50px", color: "#44AC5C", background: "White"}}/>
            <Typography>OFF</Typography>
            </Box>
        
        </Box>
        
        
        <img style={{marginLeft: "150px", marginTop: "30px"}} src="https://cdn-icons-png.flaticon.com/512/8898/8898031.png" width="138" height="129" marginTop="500px"  alt="Electric motor free icon" mt={-50} title="Electric motor free icon"  />
        </Box>
        
        <Typography style={{ color: "#ffffff" , marginLeft: "180px"}}> Motor OFF</Typography>
        <Typography style={{fontSize: "15px", marginLeft: "150px", color: "#707070"}}>Pump is off from 10Min</Typography>
        </Box>
         
        <Box >
            <Box style={{ display: "grid" }}>
            <Box ml={5} mt={-40}>
            <Box height={90} width={30}  style={{backgroundColor: "#eb5757", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></Box>
            <Typography sx={{fontWeight: 500}} style={{marginLeft:"8px"}}>R</Typography>
            </Box>
            <Box>
            <Box height={90} width={30} ml={10} mt={-40} style={{backgroundColor: "#f2c94d", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></Box>
            <Typography sx={{fontWeight: 500}} style={{marginLeft:"90px"}}>Y</Typography>
            </Box>
            <Box>
            <Box height={90} width={30} ml={15} mt={-40} style={{backgroundColor: "#1a73e9", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></Box>
            <Typography sx={{fontWeight: 500}} style={{marginLeft:"135px"}}>B</Typography>
            </Box>
            
        </Box>
            
             
        </Box>
         <Typography sx={{fontWeight: 500, marginLeft: "20px"}}> Schedule</Typography>
        <Table  sx={{
            height: '100px',
            marginLeft: "10px",
            


        }}>
            
            <tr  mt={3}  style={{borderTopLeftRadius:"50px", border: "10px solid white",padding:"20px", backgroundColor: "#f3f3f3", marginTop: "10px", marginBottom: "50px"}}>
                
                <td style={{padding: "10px"}}>OFF</td>
                <td style={{padding: "10px" }}><Typography sx={{fontWeight: 500}}>12AM</Typography></td>
                <td style={{padding: "10px"}}>Tommorow</td>
                <td style={{padding: "10px"}}><DeleteIcon  style={{color: "red"}}/></td>
            </tr>
            <tr mt={3} style={{border: "10px solid White", backgroundColor: "#f3f3f3", marginTop: "10px"}}>
                <td style={{padding: "10px"}}>OFF</td>
                <td style={{padding: "10px"}}><Typography sx={{fontWeight: 500}}>12AM</Typography></td>
                <td style={{padding: "10px"}}>Tommorow</td>
                <td style={{padding: "10px"}}><DeleteIcon style={{color: "red"}}/></td>
            </tr>
            <tr mt={3} style={{border: "10px solid White", backgroundColor: "#f3f3f3", marginTop: "10px"}}>
                <td style={{padding: "10px"}}>OFF</td>
                <td style={{padding: "10px"}}><Typography sx={{fontWeight: 500}}>12AM</Typography></td>
                <td style={{padding: "10px"}}>Tommorow</td>
                <td style={{padding: "10px"}}><DeleteIcon style={{color: "red"}}/></td>
            </tr>
            <tr mt={3} style={{border: "10px solid White", backgroundColor: "#f3f3f3", marginTop: "10px"}}>
                <td style={{padding: "10px"}}>OFF</td>
                <td style={{padding: "10px"}}><Typography sx={{fontWeight: 500}}>12AM</Typography></td>
                <td style={{padding: "10px"}}>Tommorow</td>
                <td style={{padding: "10px"}}><DeleteIcon style={{color: "red"}}/></td>
            </tr>
        </Table>
        <Box style={{color:"#44AC5C", margin: 'auto',marginTop:"3vh"}}>
        <AddIcon style={{ display:'flex', justifyContent: "center", backgroundColor:`${primaryColor}`,margin: "auto",color:"white", borderRadius: '50%', height: "50px",width: "60px"}}/>                  
        <Typography style={{marginTop:"10px", display:'flex', justifyContent: "center"}}>
            Add Schedule
        </Typography>
        </Box>
        
        
    </>
    
  )
}

export default Motorpannel
