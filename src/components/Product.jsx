import { Typography } from '@mui/material'
import productimg from '../images/product.jpg'
import React from 'react'

const Product = () => {
  return (
    <div style={{ display: "flex"}}>
        <div>
        <img src={productimg} alt='product image' />
        </div>
        <div>
            <Typography>Product</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </div>
    </div>
    
  )
}

export default Product
