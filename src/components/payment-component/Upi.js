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



export default function Upi() {
    const [data, setData] = useState("");
    const navigate = useNavigate();
    const handle = (e) => {
        const val = e.target.value;
        setData(val);
    }
    
    useEffect(() => {
        if(data === "paytm"){
            navigate("/UpiId")
        }else if(data === "gpay"){
            navigate("/UpiId")
        }else if(data === "phonepay"){
            navigate("/UpiId")
        }else if(data === "bhim"){
            navigate("/UpiId")
        }else if (data === "Upi") {
            navigate("/UpiId")
        }else if(data === "Scan"){
            navigate("/Scan");
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
                                        <FormControlLabel value="paytm" name='paytm' control={<Radio onClick={handle} />} />
                                    </td>
                                    <td>
                                        <img className='xupilogo' src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png?20170729032638" alt='Paytm' name ="paytm" />
                                    </td>
                                </td>

                                <td>
                                    <td>
                                        <FormControlLabel value="gpay" name='gpay' control={<Radio onClick={handle} />} />
                                    </td>
                                    <td>
                                        <img className='xupilogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt='G Pay' name='gpay'/>
                                    </td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <td>
                                        <FormControlLabel value="phonepay" name='phonepay' control={<Radio onClick={handle} />} />
                                    </td>
                                    <td>
                                        <img className='upilogo' src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt='PhonePe' name="phonepay" />
                                    </td>
                                </td>

                                <td>
                                    <td>
                                        <FormControlLabel value="bhim" name='bhim' control={<Radio onClick={handle} />} />
                                    </td>
                                    <td>
                                        <img className='upilogo' src="https://presentations.gov.in/wp-content/uploads/2020/06/BHIM_Preview.png?x28904" alt='Bhim' name='bhim' />
                                    </td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <td>
                                        <FormControlLabel value="amznpay" name='amznpay' control={<Radio onClick={handle}/>} />
                                    </td>
                                    <td>
                                        <img className='yupilogo' src="https://i2.wp.com/zeevector.com/wp-content/uploads/Amazon-Pay-Logo-Colour.png?fit=1087%2C349&ssl=1" alt='Amazon Pay' name="amznpay" />
                                    </td>
                                </td>

                                <td>
                                    <td>
                                        <FormControlLabel value="Upi" control={<Radio onClick={handle} />} label="Other UPI" />
                                    </td>
                                </td>
                            </tr>
                            <table>
                                <tr>
                                    <td>
                                        <td>
                                            <FormControlLabel value="Scan" control={<Radio onClick={handle} />} label="Scan QR code" />
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
