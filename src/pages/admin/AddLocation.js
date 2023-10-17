import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const AddLocation = () => {
  const [location, setLocation] = useState({
    location_name: "", // Corrected property name to match the API's expected field name
    theatre: [],
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/customer/addLocation",
        location
      );
      console.log(response.data); // Log the response for debugging purposes
      setSnackbarMessage("Location added successfully");
      setSnackbarOpen(true);
      // Optionally, you can clear the form after successful submission
      setLocation({
        location_name: "",
        theatre: [],
      });
    } catch (error) {
      console.error(error); // Handle error appropriately, e.g., display error message to the user
    }
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
              name="location_name" // Corrected name attribute
              value={location.location_name} // Corrected state property
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            {/* You can add more form fields for 'theatre' property if needed */}
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
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

export default AddLocation;
