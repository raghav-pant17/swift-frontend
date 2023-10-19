import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Upinext.css"

export default function Upinext() {
  return (
    <Box className='maindiv'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='containn'>
      <h3 className='title'>Pay using UPI</h3>
      <TextField className='firstinput' id="outlined-basic" label="Enter UPI ID" variant="outlined" />  @
      <TextField className='secondinput' id="outlined-basic" label="Enter Bank" variant="outlined" />
      <br></br>
      <button className='btn'>Make Payment</button>
      </div>
    </Box>
  )
}
