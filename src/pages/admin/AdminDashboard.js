import React from "react";
import { Grid, Paper, Typography, Container, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MovieIcon from "@mui/icons-material/Movie";
import RoomIcon from "@mui/icons-material/Room";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const centerBoth = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const headingStyle = {
  textAlign: "center",
  backgroundColor: "#3f51b5",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "20px", // Add margin to separate the heading from grids
};

const smallerGridItem = {
  minHeight: 150,
  padding: 10,
};

const AdminDashboard = () => {
  const createDashboardItem = (title, icon) => (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ ...smallerGridItem }}>
        <div style={centerBoth}>
          {icon}
          <Typography variant="h6" style={{ marginTop: 10 }}>
            {title}
          </Typography>
          <Button variant="contained" color="primary">
            Add
          </Button>
        </div>
      </Paper>
    </Grid>
  );

  return (
    <Container>
      <div style={headingStyle}>
        <Typography variant="h4">Admin Dashboard</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          {createDashboardItem("Add City", <RoomIcon />)}
          {createDashboardItem("Add Theatre", <RoomIcon />)}
        </Grid>
        <Grid container item xs={12} spacing={3}>
          {createDashboardItem("Add Movie", <MovieIcon />)}
          {createDashboardItem("Add Show", <CalendarTodayIcon />)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
