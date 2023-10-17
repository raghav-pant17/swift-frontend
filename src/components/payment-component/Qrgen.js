import React from 'react';
import qr1 from "./images/qr1.png";
import qr2 from "./images/qr2.png";
import qr3 from "./images/qr3.png";
import "./Qrgen.css"

const Qrgen = () => {
    const qr_arr = [qr1, qr2, qr3];
    var i = (Math.random()*10);
    i = Math.floor(i)%3;

    console.log(i)
  return (
    <>
    <div className='scanbox'>
    <h1>Scan the QR</h1><br/>
    <img className='qrimg' src={qr_arr[i]} alt='QR' />
    </div>
    </>
  )
}

export default Qrgen