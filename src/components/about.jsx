import React from 'react'
import farmer from '../images/farmer.jpg'
import { Box, Typography } from '@mui/material'
const about = () => {
  return (
    <div>
        <div style={{display: "flex"}} mt={5}>
        <Box >
            <img height={"70px"} width={"70px"} style={{display: "flex", border: "3px solid green", borderRadius: "50%"}} src={farmer} alt="profilepic" />
        </Box>
        <div ml={"5"}>
            <Typography style={{color: "green"}}>DarshanDodal</Typography>
            <Typography>Farmer</Typography>
        </div>
      
    </div>
    <Box width={"500px"}>
    <Typography>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas.</Typography>
    </Box>
    
    </div>
    
  )
}

export default about
