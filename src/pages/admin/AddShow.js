import React, { useState, useEffect } from "react";
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
    fetch("http://localhost:8080/api/customer/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data.userDetail);
      })
      .catch((error) => console.error("Error fetching locations: ", error));

    // Fetch data for theatres
    fetch("http://localhost:8080/api/customer/theatres/1")
      .then((response) => response.json())
      .then((data) => {
        setTheatres(data.theatres);
      })
      .catch((error) => console.error("Error fetching theatres: ", error));

    // Fetch data for movies
    fetch("http://localhost:8080/api/customer/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movieDetail);
      })
      .catch((error) => console.error("Error fetching movies: ", error));
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log("setLocation", event.target.value);
    // Fetch theatres based on the selected location
    fetch(`http://localhost:8080/api/customer/theatres/${event.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(
          `http://localhost:8080/api/customer/theatres/${event.target.value}`
        );
        setTheatres(data.theatres);
      })
      .catch((error) => console.error("Error fetching theatres: ", error));
    console.log(
      `http://localhost:8080/api/customer/theatres/${event.target.value}`
    );
  };

  const handleTheatreChange = (event) => {
    setTheatre(event.target.value);
  };

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };

  const handleShowTimingChange = (event) => {
    setShowTiming(event.target.value);
  };

  const handleAddShowTiming = () => {
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
          label="Show Timing"
          variant="outlined"
          fullWidth
          value={showTiming}
          onChange={handleShowTimingChange}
          style={{ marginTop: "1rem" }}
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
