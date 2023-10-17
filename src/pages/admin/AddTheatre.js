import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Axios from "axios";

const AddTheatre = () => {
  const [theatreData, setTheatreData] = useState({
    name: "",
    address: "",
    location: "",
  });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/customer/locations")
      .then((response) => {
        setLocations(response.data.userDetail);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheatreData({ ...theatreData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (theatreData.name && theatreData.address && theatreData.location) {
      const postData = {
        theater_address: theatreData.address,
        theater_name: theatreData.name,
        location_id: theatreData.location.id,
      };
      console.log("1", postData);

      Axios.post("endpoint", postData)
        .then((response) => {
          console.log("Theatre added successfully.", response);
        })
        .catch((error) => {
          console.error("Error adding theatre:", error);
        });
    } else {
      console.error("Please fill in all required fields.");
    }
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
                <InputLabel htmlFor="location">Location</InputLabel>
                <Select
                  label="Location"
                  name="location"
                  value={theatreData.location}
                  onChange={handleChange}
                  required
                >
                  {locations.map((location) => (
                    <MenuItem key={location.id} value={location}>
                      {location.location_name}
                    </MenuItem>
                  ))}
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
    </div>
  );
};

export default AddTheatre;
