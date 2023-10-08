import { Typography } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Radio = () => {
  return (
    <div>
      <div>
        <Typography>Lorem Ipsum dolor sit</Typography>
        <Box style={{padding: "20px", backgroundColor: "gray", height: "30px", width: "30px", borderRadius: "50%"}}>
        <FontAwesomeIcon height={"20px"} width={"20px"} icon={faRadio} />
        </Box>
        <Box width={"200px"} sx={{fontSize: "5px"}}>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue.</Typography>
        </Box>
      </div>
    </div>
  )
}

export default Radio
