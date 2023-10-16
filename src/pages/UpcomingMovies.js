// UpcomingMovies.js

import React from "react";
import { Typography } from "@mui/material";
import MovieData from "../data/MovieData";
import MovieList from "./MovieList";

const UpcomingMovies = () => {
  return (
    <div>
      <Typography variant="h5">Upcoming Movies</Typography>
      <MovieList movies={MovieData.upcomingMovies} />
    </div>
  );
};

export default UpcomingMovies;