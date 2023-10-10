import React from 'react'
import './Navba.css'
import { TbWorld } from "react-icons/tb";
import logo from '../../images/logo2.jpg'
import { Box, Button } from '@mui/material'
const Navbar = () => {
  return (
    <>
     <header >
        <Box paddingTop={"34px"} paddingLeft={"153px"}>
        <ul>
        <li style={{display: "inline-block"}}><a href='#' className='logo'><img height={"32px"} width={"111px"} src={logo} alt='logo' /></a></li>
        <li style={{display: "inline-block", textDecoration: "none", marginLeft: "75px", marginTop: "-50px"}} ><a href='#'>Home</a></li>
        <li style={{display: "inline-block", textDecoration: "none", marginLeft: "27px"}}><a href='#'>About Us</a></li>
        <li style={{display: "inline-block", textDecoration: "none", marginLeft: "29px"}}><a href='#'>Blog</a></li>
        <li style={{display: "inline-block", textDecoration: "none", marginLeft: "29px"}}><a href='#'>Contact</a></li>
        <li style={{display: "inline-block", textDecoration: "none", marginLeft: "259px"}}><Button variant="contained" style={{backgroundColor: "#78BE20"}}><a href='#'  className='button'>Sign up</a></Button></li>
        <li style={{display: "inline-block", textDecoration: "none", marginLeft: "44px"}}><TbWorld/></li>
        
        </ul>
        
        </Box>
      
     </header>
    </>
  )
}

export default Navbar
