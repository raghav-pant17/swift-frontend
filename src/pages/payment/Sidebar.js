import { Button } from "@mui/material";
import React, { useState } from "react";
import CardDetails from "../../components/payment-component/CardDetails";

export default function Sidebar() {
  const [currItem, setCurrItem]=useState('QuickPay');
  const PaymentOption = [
    // "QuickPay",
    "Debit/Credit Card",
    "Net Banking",
    // "Mobile Wallets",
    // "Gift Voucher",
    "UPI",
    // "Redeem Points",
  ];
  const mainComp = (item) =>{
    if(item === "QuickPay"){
      return null;
    }else if(item === "Debit/Credit Card"){
      return <CardDetails/>
    }else{
      return null;
    }

  }
  return (
    <div>
      {PaymentOption &&
        PaymentOption.map((curItem, index) => {
          return (
            <button id={index} onClick={(e)=>{mainComp(curItem)}} className="Payment-option-items">
              {curItem}
            </button>
          );
        })}
    </div>
  );
}
