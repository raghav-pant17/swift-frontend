import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./InternetBanking.css"
import { Margin } from '@mui/icons-material';
import { getElementError } from '@testing-library/react';



const Banks = [
  "Axis",
  "Bank Of Baroda",
  "Central Bank",
  "Dena Bank",
  "HDFC Bank",
  "ICICI Bank",
  "Kotak Mahindra Bank",
  "Punjab National Bank",
  "State Bank Of India",
  "Union Bank Of India"
];
const val = document.getElementById('select');
export default function InternetBanking() {
  const [bank, setBank] = useState("");


  const handleChange = (event) => {
    console.log(event.target.value);
    setBank(event.target.value);
  };

  const choose = (e) => {
    console.log(e.target.value)
    setBank(e.target.value);
  }
  return (
    <>
      <div>
        <FormControl>
          <FormLabel className='tex' id="demo-row-radio-buttons-group-label">Pay Using Net Banking</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <div className='mainbox' >
              <div className='ibbox'>
                <table>
                  <tbody>
                    <tr>  
                      <td>
                        <td>
                        <FormControlLabel value="SBI" control={<Radio onClick={choose} />} label="" />
                        </td>
                        <td>
                        <img className='banklogo' src="https://static.vecteezy.com/system/resources/previews/022/100/842/original/sbi-logo-transparent-free-png.png" alt='SBI' />
                        </td>
                      </td>
                      <td>
                        <td>
                        <FormControlLabel value="HDFC" control={<Radio onClick={choose} />} label="" />
                        </td>
                        <td>
                        <img className='banklogo' src="https://seekvectorlogo.net/wp-content/uploads/2018/12/hdfc-bank-vector-logo.png" alt='HDFC' />
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <td>
                        <FormControlLabel value="ICICI" control={<Radio onClick={choose} />} label="" />
                        </td>
                        <td>
                        <img className='banklogo' src="https://bfsi.eletsonline.com/wp-content/uploads/2017/01/icici_bank.png" alt='ICICI' />
                        </td>
                      </td>
                      <td>
                        <td>
                        <FormControlLabel value="AXIS" control={<Radio onClick={choose} />} label="" />
                        </td>
                        <td>
                        <img className='axisbanklogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/1200px-AXISBank_Logo.svg.png" alt='AXIS' />
                        </td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </RadioGroup>
        </FormControl>
      </div>
      <div className='select-div'>
        <InputLabel id="select-label">Select Banks</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={bank}
          label="Banks"
          onChange={handleChange}
          style={{ width: "25rem" }}
        >

          {Banks &&
            Banks.map((curItem, index) => {
              return (
                <MenuItem id={index} value={curItem}>{curItem}</MenuItem>
              );
            })}
        </Select>
        <button className='btn'>Proceed</button>
      </div>
    </>
  )
}
