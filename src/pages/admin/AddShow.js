import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
  Container,
  Typography,
  InputLabel,
  Box,
} from "@mui/material";

const ShowTimingForm = () => {
  const [locations, setLocations] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [location, setLocation] = useState("");
  const [theatre, setTheatre] = useState("");
  const [movie, setMovie] = useState("");
  const [showTiming, setShowTiming] = useState("");

  useEffect(() => {
    // Fetch data for locations
    axios
      .get("http://localhost:8080/api/location/locations")
      .then((response) => {
        setLocations(response.data.locationDetails);
      })
      .catch((error) => console.error("Error fetching locations: ", error));

    // Fetch data for movies
    axios
      .get("http://localhost:8080/api/customer/movies")
      .then((response) => {
        setMovies(response.data.movieDetail);
      })
      .catch((error) => console.error("Error fetching movies: ", error));
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log("Selected Location ID = ", event.target.value);
    // Fetch theatres based on the selected location
    axios
      .get(`http://localhost:8080/api/customer/theatres/${event.target.value}`)
      .then((response) => {
        setTheatres(response.data.theatres);
      })
      .catch((error) => console.error("Error fetching theatres: ", error));
  };

  const handleTheatreChange = (event) => {
    console.log("Selected Theatre ID = ", event.target.value);
    setTheatre(event.target.value);
  };

  const handleMovieChange = (event) => {
    console.log("Selected Movie ID = ", event.target.value);
    setMovie(event.target.value);
  };

  const handleShowTimingChange = (event) => {
    setShowTiming(event.target.value);
  };

  const handleAddShowTiming = () => {
    // Check if all fields are filled
    if (!location || !theatre || !movie || !showTiming) {
      alert("All fields are required!");
      return;
    }
    // on Submit
    console.log("Location:", location);
    console.log("Theatre:", theatre);
    console.log("Movie:", movie);
    console.log("Show Timing:", showTiming);
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        margin="auto"
      >
        <Typography
          variant="h5"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          Add Show Timing
        </Typography>
        <FormControl fullWidth>
          <InputLabel htmlFor="location-select">Select Location</InputLabel>
          <Select
            value={location}
            onChange={handleLocationChange}
            displayEmpty
            id="location-select"
            required
          >
            <MenuItem value="" disabled>
              Select Location
            </MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc.id} value={loc.id}>
                {loc.location_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="theatre-select">Select Theatre</InputLabel>
          <Select
            value={theatre}
            onChange={handleTheatreChange}
            displayEmpty
            id="theatre-select"
            required
          >
            <MenuItem value="" disabled>
              Select Theatre
            </MenuItem>
            {theatres.map((theatre) => (
              <MenuItem key={theatre.id} value={theatre.id}>
                {theatre.theaterName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="movie-select">Select Movie</InputLabel>
          <Select
            value={movie}
            onChange={handleMovieChange}
            displayEmpty
            id="movie-select"
            required
          >
            <MenuItem value="" disabled>
              Select Movie
            </MenuItem>
            {movies.map((movie) => (
              <MenuItem key={movie.id} value={movie.id}>
                {movie.movie_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Show Timing in 24 hour format (hh:mm:ss)"
          variant="outlined"
          fullWidth
          value={showTiming}
          onChange={handleShowTimingChange}
          style={{ marginTop: "1rem" }}
          required
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddShowTiming}
          style={{ marginTop: "1rem" }}
        >
          SUBMIT
        </Button>
      </Box>
    </Container>
  );
};

export default ShowTimingForm;
