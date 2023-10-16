import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import movieData from "../data/MovieData";

// A star rating component
function StarRating({ rating, onStarClick }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        onClick={() => onStarClick(i)}
        style={{
          cursor: "pointer",
          color: i <= rating ? "gold" : "grey",
          fontSize: "24px", // Adjust the star size
        }}
      />
    );
  }

  return <div>{stars}</div>;
}

const MoviePage = ({ movie }) => {
  const backgroundStyle = {
    backgroundImage:
      'url("https://www.shutterstock.com/image-photo/interface-streaming-service-website-online-260nw-2301494481.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const myParam = useParams();
  console.log("myParam", myParam);

//   get data from session storage and in place of current movies

  const { title, image, genre, description, actors, rating } = movieData.currentMovies[myParam.movieListId-1];
//   const { title, image, genre, description, actors, rating } = movieData.upcomingMovies[myParam.movieListId-1];
  return (
    <div className="movie-page" style={backgroundStyle}>
      <Container
        maxWidth="lg"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            width: "80%",
            maxHeight: "87%",
            background: "#f0f0f0",
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={3}>
            {/* Movie Title */}
            <Grid item xs={12}>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {title}
              </Typography>
            </Grid>
            {/* Movie Image */}
            <Grid item xs={12} md={6}>
              <img
                src={image}
                alt="Movie Poster"
                style={{ width: "100%", maxHeight: "100%", display: "block" }}
              />
            </Grid>
            {/* Movie Details */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "#333", fontWeight: "bold" }}
              >
                Genre: <span style={{ fontWeight: "bold" }}>{genre}</span>
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "#333" }}
              >
                <strong>Description:</strong> {description}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "#333" }}
              >
                <strong>Actors:</strong> {actors}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{ color: "#333", fontWeight: "bold" }}
              >
                Rating: <span>{rating}</span>
              </Typography>
              <br />
              <br />
              <Button variant="contained" color="error">
                Book Now
              </Button>
            </Grid>
            {/* Provide Rating Bar */}
            <Grid item xs={12}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="20px"
                background="linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))"
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="10px"
              >
                <Typography
                  variant="body1"
                  style={{ color: "#333", marginBottom: "20px" }}
                >
                  <strong>{title}</strong>: Immerse yourself in the captivating
                  storyline and brilliant performance at your favorate
                  locations. Book your shows with swift and get an amazing
                  cashback of 10%.
                  <span style={{ fontSize: "small" }}>
                    (*Terms and Conditions Applied)
                  </span>
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: "#333",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  Already watched, Rate this movie!
                </Typography>
                <StarRating
                  rating={3}
                  onStarClick={(rating) => console.log(rating)}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default MoviePage;
