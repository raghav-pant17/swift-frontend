import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Showcase from "../components/selectSeats/Showcase";
import '../components/selectSeats/selectSeats.css'
import { BottomNavigation, Stack } from "@mui/material";
import Grid from '@mui/material/Grid';
import SeatGrid from "../components/selectSeats/SeatGrid";
import PriceLegend from "../components/selectSeats/PriceLegend";
import SeatInfo from "../components/selectSeats/SeatInfo";
import BottomNavigator from "../components/selectSeats/BottomNavigator";


export default function SelectSeats(){

    const location = useLocation();

    //const [numSeats, setNumSeats] = useState(location.state.numSeats)
    const [numSeats, setNumSeats] = useState(3)
    const [occupiedSeats, setOccupiedSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])
    const [prices, setPrices] = useState({})
    const [show, setShow] = useState({})

    console.log(numSeats)
    return(
        <div className="SeatSelectionWindow">
        <Grid container spacing={5} paddingBottom={10}>
            
            <Grid item xs={4}  alignItems="center" direction="row" justifyContent="center" >
                
                <Stack spacing={3} alignItems={"center"} direction="column" marginLeft={8}>
                    <Showcase/>
                    <PriceLegend/>
                    <SeatInfo prices = {prices} selectedSeats = {selectedSeats}/>
                </Stack>
            </Grid>

            <Grid item xs={8}>
            <Stack className="Cinema" spacing={8} alignItems={"center"} direction="column">
                    <div className="screen" />
                    <SeatGrid occupiedSeats={occupiedSeats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} numSeats = {numSeats}/>
            </Stack>
            </Grid>
        </Grid>

        {
        (selectedSeats.length == numSeats) &&
             <BottomNavigator/>
        }
        </div>
        
    )
}