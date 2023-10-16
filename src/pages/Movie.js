import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import CurrentMovies from "./CurrentMovies";
import UpcomingMovies from "./UpcomingMovies";
import movieData from "../data/MovieData";

function Movie() {
  const [selectedList, setSelectedList] = useState("current");

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        My Shows
      </Typography>
      <div>
        <Button
          variant={selectedList === "current" ? "contained" : "outlined"}
          onClick={() => setSelectedList("current")}
          sx={{ margin: 2 }}
        >
          Current Movies
        </Button>
        <Button
          variant={selectedList === "upcoming" ? "contained" : "outlined"}
          onClick={() => setSelectedList("upcoming")}
          sx={{ margin: 2 }}
        >
          Upcoming Movies
        </Button>
      </div>
      {selectedList === "current" ? <CurrentMovies /> : <UpcomingMovies />}
    </Container>
  );
}

export default Movie;

