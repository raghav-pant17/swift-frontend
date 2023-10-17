import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Carousel from "../components/CarouselDesign";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TheatresList from "./TheatresList";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function ShowsList() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Current Movies" />
          <Tab value="two" label="Upcoming Movies" />
        </Tabs>

        {value=="one"? 
        <div>

        </div>: 
        
        <div>
            
        </div>}
      </Box>
    );
}

export default ShowsList;
