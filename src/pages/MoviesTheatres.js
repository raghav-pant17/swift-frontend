import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Carousel from "../components/CarouselDesign";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  clearLocation,
  selectLocation,
  selectLocationId,
} from "../store/locDataSlice";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TheatresList from "./TheatresList";


function MoviesTheatres() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const locationId = useSelector(selectLocationId);
  const navigate = useNavigate();
  const [theatreData, setTheatreData] = useState([]);


  const avatarStyle = {
    width: 150,
    height: 150,
    bgcolor: deepPurple[500],
    color: "#ffffff",
    transition: "0.3s",
    "&:hover": {
      width: 170,
      height: 170,
    },
  };

  const loadApi = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/customer/theatres/${locationId}`
      );
      setTheatreData(response.data.theatres);
      // console.log(locationId);
      console.log(response.data.theatres);
      //     console.log(result)
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log(locationId);
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Typography level="h1" style={{ padding: "30px" }}>
          THEATRES
        </Typography>

        {/* <Link to="/theatres"><Button variant="outlined">SEE MORE</Button></Link> */}
      </div>

      <TheatresList theatreData={theatreData}/>
      {/* <Carousel theatreData={theatreData} /> */}

      {/* {theatres != null && theatres.length !== 0 && <Carousel theatres={theatres} />} */}
    </>
  );
}

export default MoviesTheatres;
