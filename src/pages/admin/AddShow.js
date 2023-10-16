import React, { useState } from "react";
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
  const [location, setLocation] = useState("");
  const [theatre, setTheatre] = useState("");
  const [movie, setMovie] = useState("");
  const [showTiming, setShowTiming] = useState("");

  const locations = ["Location 1", "Location 2", "Location 3"];
  const theatres = ["Theatre 1", "Theatre 2", "Theatre 3"];
  const movies = ["Movie 1", "Movie 2", "Movie 3"];

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
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
    // Handle the addition of the selected show timing here
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
        p={4} // Add padding
        margin="auto" // Center align
      >
        <Typography
          variant="h5"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          Add Show Timing
        </Typography>
        <FormControl fullWidth>
          <InputLabel htmlFor="location-select"></InputLabel>
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
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="theatre-select"></InputLabel>
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
              <MenuItem key={theatre} value={theatre}>
                {theatre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="movie-select"></InputLabel>
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
              <MenuItem key={movie} value={movie}>
                {movie}
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
