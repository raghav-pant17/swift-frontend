import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AddLocation = () => {
  const [location, setLocation] = useState({
    name: "",
    theatre: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocation({
      ...location,
      [name]: value,
    });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the location object to the backend here
    // Assuming you have a success message from the backend
    setSnackbarMessage("Location added successfully");
    setSnackbarOpen(true);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
          <Box mb={2}>
            <Typography variant="h5">Add Location</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter name of the location here"
              name="name"
              value={location.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <Box mt={1}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust as needed
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success" // You can change the severity to "error" or "warning" if needed
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

export default AddLocation;
