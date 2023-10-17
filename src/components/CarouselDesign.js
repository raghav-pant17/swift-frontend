import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
} from "@mui/material";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./CarouselDesign.css";

import Box from "@mui/material/Box";

const style = {
  top: "50%",
  left: "50%",
  bgcolor: "background.paper",
  boxShadow: 10,
  borderRadius: 5,
  p: 4,
  backgroundColor: "#9EDDFF",
  // zIndex: -1,
};


const CarouselDesign = ({theatreData}) => {
  return (
    <>
    <Box sx={style}>
      <div className="carousel-container c">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {theatreData.map((theatre, index) => (
            <div className="cardStyle">
              <div className="package-slide" key={index}>
                <h2 className="head">{theatre.theaterName}</h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Box>
  </>
  );
};

export default CarouselDesign;
