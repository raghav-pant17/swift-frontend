// import * as React from "react";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Appbar from "../../components/Appbar";
import "./Style.css";
import Right from "../../components/payment-component/Right";
import CardDetails from "../../components/payment-component/CardDetails";
import Quick from "../../components/payment-component/Quick";
import Aivi from "../../components/payment-component/Aivi";
import Upi from "../../components/payment-component/Upi";
import InternetBanking from "../../components/payment-component/InternetBanking";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Payment() {
  const [expanded, setExpanded] = React.useState("panel");
  const [defaultChange, setDefaultChange] = React.useState("panel");
  const handleDefaultChange = (change) => (event, newExpanded) => {
    if (change === defaultChange) setDefaultChange("panel");
    else setDefaultChange(change);
    setExpanded("panel");
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setDefaultChange("panel");
    setExpanded(panel);
  };
  console.log("xxx " + defaultChange + " " + expanded);

  const [currComp, setCurrComp]=useState("Quick");
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
      setCurrComp("Quick")

    }else if(item === "Debit/Credit Card"){
       setCurrComp("CardDetails")
    }else if(item === "Net Banking"){
       setCurrComp("Net Banking")
    }else if(item === "UPI"){
      setCurrComp("UPI")
    }
    else{
      setCurrComp("aivi")
    }

  }

  return (
    <div className="container">
    <div>
      {/* <Appbar/> */}
      <Accordion
        expanded={defaultChange === "panel1" || expanded === "panel1"}
        onChange={handleDefaultChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>User Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Email ID"
                />
                <TextField
                  id="outlined-password-input"
                  label="Phone No."
                />
              </div>
          </Box>
          <button className="btn" onClick={handleChange("panel2")}>Continue</button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={defaultChange === "panel2" || expanded === "panel2"}
        onChange={handleDefaultChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Payment Options</Typography>
        </AccordionSummary>
        <AccordionDetails className="Payment-accordian">
          <div className="Payment-sidebar">
            {/* <Sidebar /> */}
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

          </div>
          <div className="Payment-main">{currComp==="Quick"?<Quick/>:
          currComp==="CardDetails"?<CardDetails/>:
          currComp==="Net Banking"?<InternetBanking/>:
          currComp==="UPI"?<Upi/>:
          currComp==="aivi"?<Aivi/>:<Quick/>} </div>
        </AccordionDetails>
      </Accordion>
    </div>
    <div className="disc">Discription</div>
    </div>
  );
}
