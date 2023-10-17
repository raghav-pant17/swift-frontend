import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Upi.css"
import { HandymanOutlined } from '@mui/icons-material';
import Upinext from './Upinext';
import { useNavigate } from 'react-router-dom';
import qr1 from "./images/qr1.png"
import qr2 from "./images/qr2.png"
import qr3 from "./images/qr3.png"


export default function Upi() {
    const [data,setData]=useState("");
    const navigate = useNavigate();
    const handle = (e) =>{
        const val = e.target.value;
        setData(val);

    }


    const qr = [qr1, qr2, qr3];
    let i = (Math.random()*10)%3;

    useEffect(()=>{
        if(data === "Scan"){
                return(
                <td>
                    <img className='upilogo' src={qr[i]} alt='QR' />
                </td>
                )
                
        }else if(data === "Upi"){
            navigate("/UpiId");
        }
    })
  return (
    <div className='contains'>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Pay Using UPI </FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <td>
                                <FormControlLabel value="Upi" control={<Radio onClick={handle}/>}  />
                                </td>
                                <td>
                                <img className='xupilogo' src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png?20170729032638" alt='Paytm' />
                                </td>
                            </td>
                        
                            <td>
                                <td>
                                <FormControlLabel value="Upi" control={<Radio />} />
                                </td>
                                <td>
                                <img className='xupilogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt='G Pay' />  
                                </td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <td>
                                <FormControlLabel value="Upi" control={<Radio />} />
                                </td>
                                <td>
                                <img className='upilogo' src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt='PhonePe' />
                                </td>
                            </td>

                            <td>
                                <td>
                                <FormControlLabel value="Upi" control={<Radio />} />
                                </td>
                                <td>
                                <img className='upilogo' src="https://presentations.gov.in/wp-content/uploads/2020/06/BHIM_Preview.png?x28904" alt='Bhim' />
                                </td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <td>
                                <FormControlLabel value="Upi" control={<Radio />} />
                                </td>
                                <td>
                                <img className='yupilogo' src="https://i2.wp.com/zeevector.com/wp-content/uploads/Amazon-Pay-Logo-Colour.png?fit=1087%2C349&ssl=1" alt='Amazon Pay' />
                                </td>
                            </td>

                            <td>
                                <td>
                                <FormControlLabel value="Upi" control={<Radio />} label="Other UPI" />
                                </td>
                            </td>
                        </tr>
                        <table>
                        <tr>
                            <td>
                                <td>
                                <FormControlLabel value="Scan" control={<Radio  onClick={handle}/>} label="Scan QR code" />
                                </td>
                                
                            </td>
                        </tr>
                        </table>
                    </tbody>
                </table>
               
            </RadioGroup>
        </FormControl>
    </div>
  )
}
