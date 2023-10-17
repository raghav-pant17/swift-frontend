import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MuiAlert from "@mui/material/Alert";

const AddTheatre = () => {
  const [theatreData, setTheatreData] = useState({
    name: "",
    address: "",
    city: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheatreData({ ...theatreData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (theatreData.name && theatreData.address && theatreData.city) {
      // backend
      // Display message
      setSnackbarSeverity("success");
      setSnackbarMessage("Theatre added successfully.");
    } else {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill in all required fields.");
    }

    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ADD THEATRE</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="city">City</InputLabel>
                <Select
                  label="City"
                  name="city"
                  value={theatreData.city}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="City1">City 1</MenuItem>
                  <MenuItem value="City2">City 2</MenuItem>
                  <MenuItem value="City3">City 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={theatreData.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={theatreData.address}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
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

export default AddTheatre;
