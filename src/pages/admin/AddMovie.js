import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const headingStyle = {
  textAlign: "center",
  margin: "0",
  padding: "20px 0",
  backgroundColor: "#2196F3",
  color: "#fff",
};

const MovieForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    director: "",
    description: "",
    starCast: "",
    poster: "",
    releaseDate: "",
    closingDate: "",
    isBlockbuster: false,
    prerelease: false,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // backend

    // backend message
    setSnackbarSeverity("success");
    setSnackbarMessage("Movie added successfully.");

    setOpenSnackbar(true);
  };

  return (
    <div>
      <Paper
        elevation={3}
        style={{ maxWidth: 400, margin: "auto", padding: "20px" }}
      >
        <Typography variant="h4" style={headingStyle}>
          ADD MOVIE
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Movie Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Star Cast"
            name="starCast"
            value={formData.starCast}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Poster URL"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Release Date"
                name="releaseDate"
                type="date"
                value={formData.releaseDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Closing Date"
                name="closingDate"
                type="date"
                value={formData.closingDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
          </Grid>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isBlockbuster}
                onChange={handleChange}
                name="isBlockbuster"
                color="primary"
              />
            }
            label="Is Blockbuster"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.prerelease}
                onChange={handleChange}
                name="prerelease"
                color="primary"
              />
            }
            label="Pre-release"
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default MovieForm;
