import React from 'react'
import { Box } from '@mui/material'
const Temp = () => {
  return (
    <Box height={"100vh"} width={"100vw"} margin={"auto"} style={{ backgroundColor: "#44AC5C"}}>
        <Box height={"90%"} width={"90%"} margin={"auto"}  style={{backgroundColor:"red", overflow: 'hidden'}}>
        <Box height={"50vh"} width={"120%"} margin={"auto"} style={{ backgroundColor: "Blue", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%"}} />
        </Box>
    </Box>
  )
}

export default Temp
