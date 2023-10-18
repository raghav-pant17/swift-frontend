import { Grid, dividerClasses } from '@mui/material';
import clsx from 'clsx'
import './selectSeats.css'
import { useEffect, useState } from 'react';



export default function SeatInfo(props){

    var prices = {recliner : 350, regular : 150 , lounger : 250};
    var selectedSeats = props.selectedSeats || []
    const [totalPrice, setTotalPrice] = useState(0);

    function getPrice(seat){
        if(seat[0]=='A')
            return prices.lounger;
        else if(seat[0]=='J')
            return prices.recliner;
        else
            return prices.regular;
    }

    function getType(seat){
        if(seat[0]=='A')
            return "Lounger";
        else if(seat[0]=='J')
            return "Recliner";
        else
            return "Regular";
    }


    useEffect(() => {
        setTotalPrice(()=>{
            let tp = 0;
            selectedSeats.map(seat=>{
                tp+=getPrice(seat);
            })
            return tp;
        })
    });

    return (
            <Grid container className="PriceLegend" justifyContent="center" alignItems="center" direction={"column"} spacing={3}>
            <Grid container justifyContent="center" alignItems="center" direction={"row"} >
                <Grid item xs={3}  justifyContent="center" alignItems="center">
                    <h3>SEATS</h3> 
                    {selectedSeats.map(seat=>{
                        return (<div> {seat}</div>)
                    })} 
                </Grid>
                <Grid item xs={3}  justifyContent="center" alignItems="center">
                    <h3>TYPE</h3> 
                    {selectedSeats.map(seat=>{
                        return (<div>{getType(seat)}</div>)
                    })} 
                </Grid>
                <Grid item xs={3}  justifyContent="center" alignItems="center">
                    <h3>PRICE</h3> 
                    {selectedSeats.map(seat=>{
                        return (<div>&#8377; {getPrice(seat)}</div>)
                    })} 
                </Grid>
                
            </Grid>
                <div style={{paddingTop:20, justifyContent:'flex-end' }}>Total Amount: &#8377;{totalPrice || 0}</div>
            </Grid>
    )
}