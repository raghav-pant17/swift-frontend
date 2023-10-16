import React from "react";
import { Typography } from "@mui/material";
import MovieData from "../data/MovieData";
import MovieList from "./MovieList";

const CurrentMovies = () => {
  return (
    <div>
      <Typography variant="h5">Current Movies</Typography>
      <MovieList movies={MovieData.currentMovies} />
    </div>
  );
};

export default CurrentMovies;