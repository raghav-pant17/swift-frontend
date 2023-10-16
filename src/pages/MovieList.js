// MovieList.js

import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import movieData from "../data/MovieData";
import { Link } from "react-router-dom";
// const movie = movieData.find((movie) => movie.id === parseInt(movie.id, 10));

const MovieList = ({ movies, status }) => {
  if (!movies || !Array.isArray(movies)) {
    return null; // Handle the case where movies are not defined or not an array.
  }
  const filteredMovies = movies.filter((movie) => movie.status === status);

  return (
    <Grid container spacing={2}>
      {filteredMovies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={movie.image}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="subtitle2">{movie.genre}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;



