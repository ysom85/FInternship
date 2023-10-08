import React from 'react'
import diagram from '../images/diaram.png'
import { Typography } from '@mui/material'
const sensorReport = () => {
  return (
    <div style={{display: "flex"}}>
        <img src={diagram} alt='diagramimage' />
        <div>
            <Typography>Seed Sensor</Typography>
            <Typography>Lorem ipsum dolor sit amet,
 consectetur adipiscing elit.</Typography>
        </div>
      
    </div>
  )
}

export default sensorReport
