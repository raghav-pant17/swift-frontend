import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Showcase from "../components/selectSeats/Showcase";
import '../components/selectSeats/selectSeats.css'
import { Stack } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function SelectSeats(){

    const location = useLocation();

    //const [numSeats, setNumSeats] = useState(location.state.numSeats)
    const [numSeats, setNumSeats] = useState(3)
    const [unavailableSeats, setUnavailableSeats] = useState([])
    const [prices, setPrices] = useState({})

    console.log(numSeats)
    return(
        <div className="SeatSelectionWindow">
        <Grid container spacing={10}>
            
            <Grid item xs={4}>
                <Stack spacing={3} alignItems={"center"} direction="column">
                    <Showcase/>
                </Stack>
            </Grid>

            <Grid item xs={8}>
            <Stack className="Cinema" spacing={3} alignItems={"center"} direction="column">
            
                    <div className="screen" />
                
            </Stack>
            </Grid>
        </Grid>
        </div>
        
    )
}