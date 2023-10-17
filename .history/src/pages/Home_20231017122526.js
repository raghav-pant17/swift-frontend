import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Carousel from "../components/Carousel";
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

function Home() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const locationId = useSelector(selectLocationId);

  const [cities, setCities] = useState([]);
  const [cityVal, setCityVal] = useState([null]);
  const navigate = useNavigate();

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
    const result = await axios.get(
      `http://localhost:8080/api/customer/locations`
    );

    console.log(result);
    setCities(result.data.userDetail);
  };

  useEffect(() => {
    loadApi();
  }, []);

  const handleClick = (city) => {
    const newLocation = city.location_name;
    const newLocationId = city.id;
    dispatch(setLocation({ location: newLocation, locationId: newLocationId }));
    navigate("/city");
  };

  return (
    <>
      <Typography level="h1" style={{ textAlign: "center", padding: "30px" }}>
        SELECT A CITY
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        paddingBlock={5}
      >
        {cities.map((city, index) => (
          <Avatar sx={avatarStyle} onClick={() => handleClick(city)}>
            {city.location_name.toUpperCase()}
          </Avatar>
        ))}
      </Stack>
    </>
  );
}

export default Home;
